import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HematologicosComponent } from './hematologicos.component';

describe('HematologicosComponent', () => {
  let component: HematologicosComponent;
  let fixture: ComponentFixture<HematologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HematologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HematologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
