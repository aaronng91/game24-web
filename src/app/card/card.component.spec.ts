import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CardComponent } from './card.component';
import { CardService } from './card.service';
import { CardPipe } from './card.pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;
  let mockService: any;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('mockService', ['fetchCards']);
    mockService.cards$ = (new BehaviorSubject([null, null, null, null])).asObservable();

    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        CardPipe,
      ],
      providers: [
        { provide: CardService, useValue: mockService }
      ]
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should fetch cards on init', () => {
    expect(mockService.fetchCards).toHaveBeenCalled();
  });
});
