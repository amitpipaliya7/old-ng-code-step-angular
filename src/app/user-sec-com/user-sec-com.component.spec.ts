import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSecComComponent } from './user-sec-com.component';

describe('UserSecComComponent', () => {
  let component: UserSecComComponent;
  let fixture: ComponentFixture<UserSecComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSecComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSecComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
