import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './ui/home-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [HomePageComponent, CharacterCardComponent],
})
export class HomePageModule {}
