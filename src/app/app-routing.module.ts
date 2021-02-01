import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./component/pages/home/home.module').then(m => m.HomeModule) }, { path: 'character-list', loadChildren: () => import('./component/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
