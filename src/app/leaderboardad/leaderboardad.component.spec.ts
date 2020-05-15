import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardadComponent } from './leaderboardad.component';

describe('LeaderboardadComponent', () => {
  let component: LeaderboardadComponent;
  let fixture: ComponentFixture<LeaderboardadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
