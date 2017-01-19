import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
  private cardsSubject = new BehaviorSubject<number[]>([null, null, null, null]);
  cards$: Observable<number[]> = this.cardsSubject.asObservable();

  next(message: string): void {
    this.cardsSubject.next(this.toIntArray(message));
  }

  private toIntArray(str: string): number[] {
    return str.substring(1, str.length - 1).split(',').map(Number);
  }
}
