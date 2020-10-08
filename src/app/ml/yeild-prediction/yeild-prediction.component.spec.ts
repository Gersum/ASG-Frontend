import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeildPredictionComponent } from './yeild-prediction.component';

describe('YeildPredictionComponent', () => {
  let component: YeildPredictionComponent;
  let fixture: ComponentFixture<YeildPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeildPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeildPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
