import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageAngularComponent } from './home-page-angular.component';

describe('HomePageAngularComponent', () => {
  let component: HomePageAngularComponent;
  let fixture: ComponentFixture<HomePageAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
