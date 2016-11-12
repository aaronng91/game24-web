import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';
import { CardPipe } from './card/card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
