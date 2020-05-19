import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyscraperadComponent } from './skyscraperad.component';

describe('SkyscraperadComponent', () => {
  let component: SkyscraperadComponent;
  let fixture: ComponentFixture<SkyscraperadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyscraperadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyscraperadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
