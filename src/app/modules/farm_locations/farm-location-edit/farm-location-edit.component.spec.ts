import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLocationEditComponent } from './farm-location-edit.component';

describe('FarmLocationEditComponent', () => {
  let component: FarmLocationEditComponent;
  let fixture: ComponentFixture<FarmLocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmLocationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
