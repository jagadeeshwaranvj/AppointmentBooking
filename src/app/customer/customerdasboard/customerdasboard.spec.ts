import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerdasboard } from './customerdasboard';

describe('Customerdasboard', () => {
  let component: Customerdasboard;
  let fixture: ComponentFixture<Customerdasboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerdasboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerdasboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
