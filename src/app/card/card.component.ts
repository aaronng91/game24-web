import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Card } from '../models/card.model';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards$: Observable<Array<Card>>;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards$ = this.cardService.cards$;
  }

  refresh() {
    this.cardService.refreshCards();
  }
}
