import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedwidgetpieExComponent } from './sharedwidgetpie-ex.component';

describe('SharedwidgetpieExComponent', () => {
  let component: SharedwidgetpieExComponent;
  let fixture: ComponentFixture<SharedwidgetpieExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedwidgetpieExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedwidgetpieExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
