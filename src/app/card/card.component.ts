import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CardService } from './card.service';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cards$: Observable<number[]>;
  playerId$: Observable<number>;

  constructor(
    private cardService: CardService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.cards$ = this.cardService.cards$;
    this.playerId$ = this.playerService.playerId$;
  }
}
