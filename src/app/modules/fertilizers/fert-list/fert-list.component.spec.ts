import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertListComponent } from './fert-list.component';

describe('FertListComponent', () => {
  let component: FertListComponent;
  let fixture: ComponentFixture<FertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
