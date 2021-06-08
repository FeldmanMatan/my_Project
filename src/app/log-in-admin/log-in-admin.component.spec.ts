import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInAdmainComponent } from './log-in-admin.component';

describe('LogInAdmainComponent', () => {
  let component: LogInAdmainComponent;
  let fixture: ComponentFixture<LogInAdmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInAdmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInAdmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
