import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumleaderboardComponent } from './mediumleaderboard.component';

describe('MediumleaderboardComponent', () => {
  let component: MediumleaderboardComponent;
  let fixture: ComponentFixture<MediumleaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumleaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
