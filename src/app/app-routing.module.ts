import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListModule } from './component/pages/characters/character-list/character-list.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./component/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
  { path: 'character-list', loadChildren: () => import('./component/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
  { path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
