import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropeditComponent } from './cropedit.component';

describe('CropeditComponent', () => {
  let component: CropeditComponent;
  let fixture: ComponentFixture<CropeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
