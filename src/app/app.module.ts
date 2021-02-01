import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickymortyComponent } from './rickymorty/rickymorty.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FormSearchComponent } from './shared/component/form-search/form-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RickymortyComponent,
    HeaderComponent,
    FormSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
