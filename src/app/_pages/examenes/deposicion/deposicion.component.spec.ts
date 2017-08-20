import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposicionComponent } from './deposicion.component';

describe('DeposicionComponent', () => {
  let component: DeposicionComponent;
  let fixture: ComponentFixture<DeposicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
