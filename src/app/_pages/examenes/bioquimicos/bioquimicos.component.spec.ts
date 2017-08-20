import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioquimicosComponent } from './bioquimicos.component';

describe('BioquimicosComponent', () => {
  let component: BioquimicosComponent;
  let fixture: ComponentFixture<BioquimicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioquimicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioquimicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
