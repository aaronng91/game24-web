import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CardService } from './card.service';

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CardService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should fetch cards from server',
    inject([CardService, MockBackend], (service: CardService, mockBackend: MockBackend) => {

      let cards = [2, 3, 4, 5];
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: cards
            }
            )));
        });

      service.fetchCards();

      service.cards$.subscribe(value => {
        expect(value).toEqual(cards);
      });
    }));

  it('should subscribe to server for new sets of card values',
    inject([CardService, MockBackend], (service: CardService, mockBackend: MockBackend) => {


    }));
});
