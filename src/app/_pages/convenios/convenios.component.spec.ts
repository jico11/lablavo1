import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosComponent } from './convenios.component';

describe('ConveniosComponent', () => {
  let component: ConveniosComponent;
  let fixture: ComponentFixture<ConveniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
