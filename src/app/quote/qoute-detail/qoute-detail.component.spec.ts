import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteDetailComponent } from './qoute-detail.component';

describe('QouteDetailComponent', () => {
  let component: QouteDetailComponent;
  let fixture: ComponentFixture<QouteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QouteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
