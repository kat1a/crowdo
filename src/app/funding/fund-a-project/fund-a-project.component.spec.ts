import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAProjectComponent } from './fund-a-project.component';

describe('FundAProjectComponent', () => {
  let component: FundAProjectComponent;
  let fixture: ComponentFixture<FundAProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundAProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
