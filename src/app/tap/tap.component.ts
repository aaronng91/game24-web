import { Component } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { TapService } from './tap.service';
import { OnInit } from '../../../node_modules/@angular/core/src/metadata/lifecycle_hooks';
import { CardService } from '../card/card.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  gameEnded: boolean;
  winningPlayerId: number;

  constructor(
    private websocketService: WebsocketService,
    private tapService: TapService,
    private cardService: CardService) {}

  ngOnInit() {
    this.tapService.firstPlayerToTap$.subscribe(playerId => {
      this.winningPlayerId = playerId;
      this.gameEnded = true;
    });

    this.cardService.cards$.subscribe(() => {
      this.gameEnded = false;
    });
  }

  restart() {
    this.websocketService.send('/refresh');
  }

  gotIt() {
    this.websocketService.send('/gotIt');
  }
}
