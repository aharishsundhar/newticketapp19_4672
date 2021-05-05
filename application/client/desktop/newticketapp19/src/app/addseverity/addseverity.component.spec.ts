import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseverityComponent } from './addseverity.component';

describe('AddseverityComponent', () => {
  let component: AddseverityComponent;
  let fixture: ComponentFixture<AddseverityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddseverityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});