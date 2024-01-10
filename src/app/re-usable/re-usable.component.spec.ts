import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableComponent } from './re-usable.component';

describe('ReUsableComponent', () => {
  let component: ReUsableComponent;
  let fixture: ComponentFixture<ReUsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReUsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReUsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
