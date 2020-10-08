import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLocationListComponent } from './farm-location-list.component';

describe('FarmLocationListComponent', () => {
  let component: FarmLocationListComponent;
  let fixture: ComponentFixture<FarmLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
