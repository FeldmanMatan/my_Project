import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticAlgorithemComponent } from './genetic-algorithem.component';

describe('GeneticAlgorithemComponent', () => {
  let component: GeneticAlgorithemComponent;
  let fixture: ComponentFixture<GeneticAlgorithemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticAlgorithemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticAlgorithemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
