import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/component/interfaces/character.interface';
import { take } from 'rxjs/operators';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  info: RequestInfo = {
    next: '',
  }

  private page = 1;
  private query: string;
  private hidescrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private CharacterSvr: CharacterService) { this.query = '' }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService():void {
    this.CharacterSvr.searchCharacters(this.query, this.page)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      const { info, results } = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    } );
  }
}
