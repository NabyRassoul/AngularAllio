import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityProgramComponent } from './fidelity-program.component';

describe('FidelityProgramComponent', () => {
  let component: FidelityProgramComponent;
  let fixture: ComponentFixture<FidelityProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidelityProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FidelityProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
