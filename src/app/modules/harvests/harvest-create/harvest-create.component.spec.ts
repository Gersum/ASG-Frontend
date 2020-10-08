import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestCreateComponent } from './harvest-create.component';

describe('HarvestCreateComponent', () => {
  let component: HarvestCreateComponent;
  let fixture: ComponentFixture<HarvestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
