import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './ui/home-page.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    HomePageComponent,
    CharacterCardComponent,
    ConfirmationDialogComponent,
  ],
})
export class HomePageModule {}
