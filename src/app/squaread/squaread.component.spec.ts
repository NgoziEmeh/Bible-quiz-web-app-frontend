import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareadComponent } from './squaread.component';

describe('SquareadComponent', () => {
  let component: SquareadComponent;
  let fixture: ComponentFixture<SquareadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
