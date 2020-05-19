import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileadComponent } from './mobilead.component';

describe('MobileadComponent', () => {
  let component: MobileadComponent;
  let fixture: ComponentFixture<MobileadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
