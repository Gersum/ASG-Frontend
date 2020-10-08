import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeditComponent } from './subedit.component';

describe('SubeditComponent', () => {
  let component: SubeditComponent;
  let fixture: ComponentFixture<SubeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
