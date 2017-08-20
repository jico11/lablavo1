import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkteamComponent } from './workteam.component';

describe('WorkteamComponent', () => {
  let component: WorkteamComponent;
  let fixture: ComponentFixture<WorkteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
