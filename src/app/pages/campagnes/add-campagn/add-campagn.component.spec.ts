import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampagnComponent } from './add-campagn.component';

describe('AddCampagnComponent', () => {
  let component: AddCampagnComponent;
  let fixture: ComponentFixture<AddCampagnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCampagnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCampagnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
