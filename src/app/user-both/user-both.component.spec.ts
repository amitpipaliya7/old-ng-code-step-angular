import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBothComponent } from './user-both.component';

describe('UserBothComponent', () => {
  let component: UserBothComponent;
  let fixture: ComponentFixture<UserBothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
