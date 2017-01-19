import { TestBed, inject } from '@angular/core/testing';
import { PlayerService } from './player.service';

describe('Service: Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it('should properly deserialise playerId on incoming message',
    inject([PlayerService], (service: PlayerService) => {
      let message = 12;
      service.next(message);

      service.playerId$.subscribe((playerId: number) => {
        expect(playerId).toEqual(message);
      });
  }));
});
