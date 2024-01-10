import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComComponent } from './user-list-com.component';

describe('UserListComComponent', () => {
  let component: UserListComComponent;
  let fixture: ComponentFixture<UserListComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
