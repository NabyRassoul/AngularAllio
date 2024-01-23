import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampagnComponent } from './view-campagn.component';

describe('ViewCampagnComponent', () => {
  let component: ViewCampagnComponent;
  let fixture: ComponentFixture<ViewCampagnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCampagnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCampagnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
