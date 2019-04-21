import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorProfileComponent } from './investor-profile.component';

describe('InvestorProfileComponent', () => {
  let component: InvestorProfileComponent;
  let fixture: ComponentFixture<InvestorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
