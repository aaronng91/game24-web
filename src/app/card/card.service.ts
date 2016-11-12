import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
  private cards: number[] = [1, 2, 3, 4];
  private cardsSubject: BehaviorSubject<number[]>;
  cards$: Observable<number[]>;

  constructor() {
    this.resetCards();
    this.cardsSubject = new BehaviorSubject<number[]>(this.cards);
    this.cards$ = this.cardsSubject.asObservable();
  }

  refreshCards(): void {
    this.resetCards();
    this.cardsSubject.next(this.cards);
  }

  resetCards(): void {
    this.cards = Array.from(Array(4), x => this.generateRandomValue(1, 13));
  }

  generateRandomValue(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
