import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards$: Observable<number[]>;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards$ = this.cardService.cards$;
    this.cardService.fetchCards();
  }
}
