import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInnerComponent } from './item-inner.component';

describe('ItemInnerComponent', () => {
  let component: ItemInnerComponent;
  let fixture: ComponentFixture<ItemInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
