import { TestBed, inject } from '@angular/core/testing';
import { CardService } from './card.service';

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
        expect(card >= 1 && card <= 13).toBeTruthy();
      });
    });
  }));
});
