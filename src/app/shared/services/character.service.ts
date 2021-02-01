import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
//import { Character } from '@shared/interfaces/character.interface';
import { Character } from '../component/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query: string = '', page: number = 1){
    //Debugging
    console.log(`${environment.baseUrlAPI}?name=${query}&page=${page}`);

    return this.http.get<Character[]>(
      `${environment.baseUrlAPI}/?name=${query}&page=${page}`
      )
  }
}
