import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TapComponent } from './tap/tap.component';
import { WebsocketService } from './websocket/websocket.service';
import { CardService } from './card/card.service';
import { PlayerService } from './player/player.service';
import { CardPipe } from './card/card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TapComponent,
    CardPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CardService,
    PlayerService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
