import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAboutEverythingComponent } from './child-about-everything.component';

describe('ChildAboutEverythingComponent', () => {
  let component: ChildAboutEverythingComponent;
  let fixture: ComponentFixture<ChildAboutEverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAboutEverythingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAboutEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
