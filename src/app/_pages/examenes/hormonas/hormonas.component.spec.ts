import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HormonasComponent } from './hormonas.component';

describe('HormonasComponent', () => {
  let component: HormonasComponent;
  let fixture: ComponentFixture<HormonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HormonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HormonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
