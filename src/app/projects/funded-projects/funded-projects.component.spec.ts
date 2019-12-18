import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedProjectsComponent } from './funded-projects.component';

describe('FundedProjectsComponent', () => {
  let component: FundedProjectsComponent;
  let fixture: ComponentFixture<FundedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
