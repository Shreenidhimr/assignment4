import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndviewComponent } from './indview.component';

describe('IndviewComponent', () => {
  let component: IndviewComponent;
  let fixture: ComponentFixture<IndviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
