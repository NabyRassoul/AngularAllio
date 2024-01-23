import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBonComponent } from './view-bon.component';

describe('ViewBonComponent', () => {
  let component: ViewBonComponent;
  let fixture: ComponentFixture<ViewBonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
