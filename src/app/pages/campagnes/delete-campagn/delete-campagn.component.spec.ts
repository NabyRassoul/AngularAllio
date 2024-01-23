import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCampagnComponent } from './delete-campagn.component';

describe('DeleteCampagnComponent', () => {
  let component: DeleteCampagnComponent;
  let fixture: ComponentFixture<DeleteCampagnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCampagnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCampagnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
