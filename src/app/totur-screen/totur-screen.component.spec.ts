import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToturScreenComponent } from './totur-screen.component';

describe('ToturScreenComponent', () => {
  let component: ToturScreenComponent;
  let fixture: ComponentFixture<ToturScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToturScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToturScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
