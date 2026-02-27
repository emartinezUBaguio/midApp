import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usertransactions } from './usertransactions';

describe('Usertransactions', () => {
  let component: Usertransactions;
  let fixture: ComponentFixture<Usertransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usertransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usertransactions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
