import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WebsocketService } from '../websocket/websocket.service';
import { TapComponent } from './tap.component';
import { TapService } from './tap.service';
import { Subject } from '../../../node_modules/rxjs/Subject';
import { CardService } from '../card/card.service';

describe('Component: Tap', () => {
  let fixture: ComponentFixture<TapComponent>;
  let component: TapComponent;

  let mockWebsocketService: WebsocketService;
  let mockTapService: TapService;
  let mockCardService: CardService;

  let fakeTapSubject = new Subject<number>();
  let fakeCardSubject = new Subject<number[]>();

  beforeEach(async(() => {
    mockWebsocketService = jasmine.createSpyObj('Fake WebsocketService', ['send']);
    mockTapService = new TapService();
    mockTapService.firstPlayerToTap$ = fakeTapSubject.asObservable();
    mockCardService = new CardService();
    mockCardService.cards$ = fakeCardSubject.asObservable();

    TestBed.configureTestingModule({
      declarations: [ TapComponent ],
      providers: [
        { provide: CardService, useValue: mockCardService },
        { provide: TapService, useValue: mockTapService },
        { provide: WebsocketService, useValue: mockWebsocketService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should call websocket service when restart button is clicked', () => {
    component.gameEnded = true;
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.restart').click();

    expect(mockWebsocketService.send).toHaveBeenCalledWith('/refresh');
  });

  it('should call websocket service when gotIt button is clicked', () => {
    fixture.nativeElement.querySelector('.got-it').click();

    expect(mockWebsocketService.send).toHaveBeenCalledWith('/gotIt');
  });

  it('should display results panel with player ID upon receiving player ID who tapped first', () => {
    fakeTapSubject.next(1);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#player-won').textContent).toEqual('Player 1 wins!');
    expect(fixture.nativeElement.querySelector('.got-it')).toBeNull();
    expect(fixture.nativeElement.querySelector('.restart')).toBeDefined();
  });

  it('should dismiss results panel upon receiving new cards', () => {
    component.gameEnded = true;
    fakeCardSubject.next([1, 2, 3, 4]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#player-won')).toBeNull();
    expect(fixture.nativeElement.querySelector('.got-it')).toBeDefined();
    expect(fixture.nativeElement.querySelector('.restart')).toBeNull();
  });
});
