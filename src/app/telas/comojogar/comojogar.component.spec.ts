/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComojogarComponent } from './comojogar.component';

describe('ComojogarComponent', () => {
  let component: ComojogarComponent;
  let fixture: ComponentFixture<ComojogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComojogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComojogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
