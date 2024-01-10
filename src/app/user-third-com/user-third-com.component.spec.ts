import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThirdComComponent } from './user-third-com.component';

describe('UserThirdComComponent', () => {
  let component: UserThirdComComponent;
  let fixture: ComponentFixture<UserThirdComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserThirdComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserThirdComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
