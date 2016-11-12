import { TestBed, inject } from '@angular/core/testing';
import { CardService } from './card.service';
import { SHOWN_VALUES } from '../models/card.values';

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should generate appropriate card values', inject([CardService], (service: CardService) => {
    service.refreshCards();

    service.cards$.subscribe(cards => {
      cards.forEach(card => {
        expect(card.value >= 1 && card.value <= 13).toBeTruthy();
        expect(card.shownValue).toEqual(SHOWN_VALUES[card.value - 1]);
      });
    });
  }));
});
