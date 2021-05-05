import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchupdateticketComponent } from './searchupdateticket.component';

describe('SearchupdateticketComponent', () => {
  let component: SearchupdateticketComponent;
  let fixture: ComponentFixture<SearchupdateticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchupdateticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchupdateticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});