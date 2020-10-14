import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoybeanPredictionComponent } from './soybean-prediction.component';

describe('SoybeanPredictionComponent', () => {
  let component: SoybeanPredictionComponent;
  let fixture: ComponentFixture<SoybeanPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoybeanPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoybeanPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
