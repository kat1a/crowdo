import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectsofuserComponent } from './viewprojectsofuser.component';

describe('ViewprojectsofuserComponent', () => {
  let component: ViewprojectsofuserComponent;
  let fixture: ComponentFixture<ViewprojectsofuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprojectsofuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectsofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
