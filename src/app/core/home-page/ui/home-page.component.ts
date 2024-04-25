import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharactersService } from '../../../shared/services/api/characters-api/characters.service';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { WinnerCombinations } from '../mocks/winner-combinations-mocks';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  board!: string[][];
  player: string = 'X';
  xPlayerPoints = 0;
  oPlayerPoints = 0;

  data$: any;

  constructor(
    private charactersService: CharactersService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.playGame();
  }

  openModal(player: string) {
    this.matDialog.open(ConfirmationDialogComponent, {
      data: {
        width: '50%',
        content: {
          title: `Digite o nome do personagem do ${player}`,
          button: 'enviar',
        },
      },
    });
  }

  getCharacter(inputValue: string, player?: string) {
    this.charactersService.getCharacters(inputValue).subscribe((res) => {
      if (res.data.results.length > 0) {
        const newData = [...this.data$.value, res.data.results[0]];
        this.data$.next(newData);
      } else {
        alert(
          'Nenhum personagem com este nome foi encontrado, refaça sua busca'
        );
      }
    });
  }

  playGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  getPlayer() {
    this.player = this.player == 'X' ? 'O' : 'X';
  }

  setPlayer() {
    this.player = 'X';
  }

  setPosition(indexColumn: any, indexTuple: any) {
    if (this.board[indexColumn][indexTuple] !== '') return;
    this.board[indexColumn][indexTuple] = this.player;
    this.gameOver();
  }

  gameOver() {
    if (this.verifyWinner()) {
      this.matDialog.open(ConfirmationDialogComponent, {
        data: {
          content: {
            h1: `O ${this.player} ganhou!`,
            button: 'Ok',
          },
        },
      });
      this.addPoints();
      this.playGame();
      this.setPlayer();
    } else if (this.verifyDraw()) {
      this.matDialog.open(ConfirmationDialogComponent, {
        width: '50%',
        data: {
          content: {
            h1: 'Empate',
            button: 'Ok',
          },
        },
      });
      this.playGame();
      this.setPlayer();
    } else this.getPlayer();
  }

  verifyDraw() {
    return this.board.every((row) => {
      return row.every((column, i) => {
        return row[i] != '' && column[i] != '';
      });
    });
  }

  verifyWinner() {
    return WinnerCombinations.some((combination) => {
      return combination.every(
        ([row, col]) => `${this.board[row][col]}` === this.player
      );
    });
  }

  addPoints() {
    this.player === 'X' ? (this.xPlayerPoints += 1) : (this.oPlayerPoints += 1);
  }
}
