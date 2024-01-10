import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutOnlyMeComponent } from './child-about-only-me.component';

describe('ChildAboutOnlyMeComponent', () => {
  let component: ChildAboutOnlyMeComponent;
  let fixture: ComponentFixture<ChildAboutOnlyMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAboutOnlyMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAboutOnlyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
