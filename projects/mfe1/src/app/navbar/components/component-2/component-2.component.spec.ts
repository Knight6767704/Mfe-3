import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2Component } from './component-2.component';

describe('Component2Component', () => {
  let component: Component2Component;
  let fixture: ComponentFixture<Component2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component2Component]
    });
    fixture = TestBed.createComponent(Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
