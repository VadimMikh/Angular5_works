import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson1TableComponent } from './products.component';

describe('Lesson1TableComponent', () => {
  let component: Lesson1TableComponent;
  let fixture: ComponentFixture<Lesson1TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson1TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
