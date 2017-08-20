import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrinaComponent } from './orina.component';

describe('OrinaComponent', () => {
  let component: OrinaComponent;
  let fixture: ComponentFixture<OrinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
