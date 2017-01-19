import { TestBed, inject } from '@angular/core/testing';
import { CardService } from './card.service';

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CardService
      ]
    });
  });

  it('should properly deserialise cards on incoming message',
    inject([CardService], (service: CardService) => {
      service.next('[10,1,9,13]');

      service.cards$.subscribe((cards: number[]) => {
        expect(cards).toEqual([10, 1, 9, 13]);
      });
    }));
});
