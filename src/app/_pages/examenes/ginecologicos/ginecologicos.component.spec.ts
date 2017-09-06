import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinecologicosComponent } from './ginecologicos.component';

describe('GinecologicosComponent', () => {
  let component: GinecologicosComponent;
  let fixture: ComponentFixture<GinecologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinecologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinecologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
