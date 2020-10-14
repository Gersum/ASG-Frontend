import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatPredictionComponent } from './weat-prediction.component';

describe('WeatPredictionComponent', () => {
  let component: WeatPredictionComponent;
  let fixture: ComponentFixture<WeatPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
