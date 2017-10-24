import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroservicioComponent } from './otroservicio.component';

describe('OtroservicioComponent', () => {
  let component: OtroservicioComponent;
  let fixture: ComponentFixture<OtroservicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtroservicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
