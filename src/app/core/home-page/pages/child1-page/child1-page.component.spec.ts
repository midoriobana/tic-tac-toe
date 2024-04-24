/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Child1PageComponent } from './child1-page.component';

describe('Child1PageComponent', () => {
  let component: Child1PageComponent;
  let fixture: ComponentFixture<Child1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
