import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Providerappointement } from './providerappointement';

describe('Providerappointement', () => {
  let component: Providerappointement;
  let fixture: ComponentFixture<Providerappointement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Providerappointement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Providerappointement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
