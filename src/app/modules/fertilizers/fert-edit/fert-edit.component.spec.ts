import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertEditComponent } from './fert-edit.component';

describe('FertEditComponent', () => {
  let component: FertEditComponent;
  let fixture: ComponentFixture<FertEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
