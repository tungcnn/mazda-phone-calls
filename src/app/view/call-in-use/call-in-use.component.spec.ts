import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInUseComponent } from './call-in-use.component';

describe('CallInUseComponent', () => {
  let component: CallInUseComponent;
  let fixture: ComponentFixture<CallInUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallInUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
