import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorghumPredictionComponent } from './sorghum-prediction.component';

describe('SorghumPredictionComponent', () => {
  let component: SorghumPredictionComponent;
  let fixture: ComponentFixture<SorghumPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorghumPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorghumPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
