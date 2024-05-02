import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error4004Component } from './error4004.component';

describe('Error4004Component', () => {
  let component: Error4004Component;
  let fixture: ComponentFixture<Error4004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error4004Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error4004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
