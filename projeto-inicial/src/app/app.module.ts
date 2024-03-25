import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardButtonRoxoComponent } from './card-button-roxo/card-button-roxo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonRoxoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
