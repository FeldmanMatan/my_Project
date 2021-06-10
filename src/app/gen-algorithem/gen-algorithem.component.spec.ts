import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenAlgorithemComponent } from './gen-algorithem.component';

describe('GenAlgorithemComponent', () => {
  let component: GenAlgorithemComponent;
  let fixture: ComponentFixture<GenAlgorithemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenAlgorithemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenAlgorithemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
