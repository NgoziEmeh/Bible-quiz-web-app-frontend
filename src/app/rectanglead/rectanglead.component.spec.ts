import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleadComponent } from './rectanglead.component';

describe('RectangleadComponent', () => {
  let component: RectangleadComponent;
  let fixture: ComponentFixture<RectangleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
