import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rhome } from './rhome';

describe('Rhome', () => {
  let component: Rhome;
  let fixture: ComponentFixture<Rhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rhome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
