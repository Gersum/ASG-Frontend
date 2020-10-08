import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmLocationCreateComponent } from './farm-location-create.component';

describe('FarmLocationCreateComponent', () => {
  let component: FarmLocationCreateComponent;
  let fixture: ComponentFixture<FarmLocationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmLocationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmLocationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
