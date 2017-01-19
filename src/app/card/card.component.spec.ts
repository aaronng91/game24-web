import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('Component: Card', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));
});
