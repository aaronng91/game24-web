import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Card } from '../models/card.model';
import { SHOWN_VALUES } from '../models/card.values';

@Injectable()
export class CardService {
  private cards: Array<Card> = new Array(
    new Card(0, '0'),
    new Card(0, '0'),
    new Card(0, '0'),
    new Card(0, '0'));
  private cardsSubject: BehaviorSubject<Array<Card>>;
  cards$: Observable<Array<Card>>;

  constructor() {
    this.resetCards();
    this.cardsSubject = new BehaviorSubject<Array<Card>>(this.cards);
    this.cards$ = this.cardsSubject.asObservable();
  }

  refreshCards(): void {
    this.resetCards();
    this.cardsSubject.next(this.cards);
  }

  resetCards(): void {
    this.cards.forEach(card => {
      card.value = this.generateRandomValue(1, 13);
      card.shownValue = this.convertValueToShownValue(card.value);
    });
  }

  generateRandomValue(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  convertValueToShownValue(value: number): string {
    return SHOWN_VALUES[value - 1];
  }
}
