import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopplayersComponent } from './topplayers.component';

describe('TopplayersComponent', () => {
  let component: TopplayersComponent;
  let fixture: ComponentFixture<TopplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
