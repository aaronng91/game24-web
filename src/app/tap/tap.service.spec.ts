import { TestBed, inject } from '@angular/core/testing';
import { TapService } from './tap.service';

describe('Service: Tap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TapService]
    });
  });

  it('should properly deserialise playerId on incoming message',
    inject([TapService], (service: TapService) => {
      let message = 1;
      service.next(message);

      service.firstPlayerToTap$.subscribe((playerId: number) => {
        expect(playerId).toEqual(message);
      });
    }));
});
