import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContolheaderComponent } from './contolheader.component';

describe('ContolheaderComponent', () => {
  let component: ContolheaderComponent;
  let fixture: ComponentFixture<ContolheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContolheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContolheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
