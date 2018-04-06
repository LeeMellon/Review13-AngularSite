import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsPageComponent } from './subs-page.component';

describe('SubsPageComponent', () => {
  let component: SubsPageComponent;
  let fixture: ComponentFixture<SubsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
