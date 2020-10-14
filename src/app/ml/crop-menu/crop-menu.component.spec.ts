import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropMenuComponent } from './crop-menu.component';

describe('CropMenuComponent', () => {
  let component: CropMenuComponent;
  let fixture: ComponentFixture<CropMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
