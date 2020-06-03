import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeskyscraperComponent } from './largeskyscraper.component';

describe('LargeskyscraperComponent', () => {
  let component: LargeskyscraperComponent;
  let fixture: ComponentFixture<LargeskyscraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeskyscraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeskyscraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
