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

  it('should fetch cards from server',
    inject([CardService], (service: CardService) => {

    }));

  it('should subscribe to server for new sets of card values',
    inject([CardService], (service: CardService) => {

    }));
});
