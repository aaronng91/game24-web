import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CardComponent } from './card.component';
import { CardService } from './card.service';
import { CardPipe } from './card.pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    // Creating mock cardService
    let cards: number[] = [1, 2, 3, 4];
    let mockService: any = {
      'cards$': (new BehaviorSubject(cards)).asObservable()
    };

    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        CardPipe,
        ],
      providers: [
        { provide: CardService, useValue: mockService }
        ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should have 4 cards on init', () => {
    expect(component.cards$.subscribe(cards => {
      expect(cards.length).toEqual(4);
    }));
  });
});
