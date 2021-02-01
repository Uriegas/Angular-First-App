import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterListComponent
  ],
})
export class CharactersModule { }
