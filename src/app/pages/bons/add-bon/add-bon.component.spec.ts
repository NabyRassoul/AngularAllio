import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonComponent } from './add-bon.component';

describe('AddBonComponent', () => {
  let component: AddBonComponent;
  let fixture: ComponentFixture<AddBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
