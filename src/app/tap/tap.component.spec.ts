import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { WebsocketService } from '../websocket/websocket.service';
import { TapComponent } from './tap.component';

describe('Component: Tap', () => {
  let fixture: ComponentFixture<TapComponent>;
  let component: TapComponent;
  let mockService: WebsocketService;

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj('Fake WebsocketService', ['send']);

    TestBed.configureTestingModule({
      declarations: [ TapComponent ],
      providers: [
        { provide: WebsocketService, useValue: mockService }
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

  it('should call websocket service when refresh button is clicked', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(mockService.send).toHaveBeenCalledWith('/refresh');
  });
});
