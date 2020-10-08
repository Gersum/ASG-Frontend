import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropcreateComponent } from './cropcreate.component';

describe('CropcreateComponent', () => {
  let component: CropcreateComponent;
  let fixture: ComponentFixture<CropcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
