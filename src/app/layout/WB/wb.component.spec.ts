import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WBComponent } from './wb.component';

describe('WBComponent', () => {
  let component: WBComponent;
  let fixture: ComponentFixture<WBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
