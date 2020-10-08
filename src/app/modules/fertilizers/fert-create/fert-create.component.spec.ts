import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertCreateComponent } from './fert-create.component';

describe('FertCreateComponent', () => {
  let component: FertCreateComponent;
  let fixture: ComponentFixture<FertCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
