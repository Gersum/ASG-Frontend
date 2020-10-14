import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaPredictionComponent } from './pea-prediction.component';

describe('PeaPredictionComponent', () => {
  let component: PeaPredictionComponent;
  let fixture: ComponentFixture<PeaPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeaPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeaPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
