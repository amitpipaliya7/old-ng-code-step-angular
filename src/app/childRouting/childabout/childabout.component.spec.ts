import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildaboutComponent } from './childabout.component';

describe('ChildaboutComponent', () => {
  let component: ChildaboutComponent;
  let fixture: ComponentFixture<ChildaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
