import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesteeProfileComponent } from './investee-profile.component';

describe('InvesteeProfileComponent', () => {
  let component: InvesteeProfileComponent;
  let fixture: ComponentFixture<InvesteeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvesteeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvesteeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
