import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcreateComponent } from './subcreate.component';

describe('SubcreateComponent', () => {
  let component: SubcreateComponent;
  let fixture: ComponentFixture<SubcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
