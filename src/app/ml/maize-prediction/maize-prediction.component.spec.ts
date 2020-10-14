import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaizePredictionComponent } from './maize-prediction.component';

describe('MaizePredictionComponent', () => {
  let component: MaizePredictionComponent;
  let fixture: ComponentFixture<MaizePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaizePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaizePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
