import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBonComponent } from './delete-bon.component';

describe('DeleteBonComponent', () => {
  let component: DeleteBonComponent;
  let fixture: ComponentFixture<DeleteBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
