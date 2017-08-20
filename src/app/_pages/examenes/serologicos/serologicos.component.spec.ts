import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerologicosComponent } from './serologicos.component';

describe('SerologicosComponent', () => {
  let component: SerologicosComponent;
  let fixture: ComponentFixture<SerologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
