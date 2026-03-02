import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userposts } from './userposts';

describe('Userposts', () => {
  let component: Userposts;
  let fixture: ComponentFixture<Userposts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userposts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userposts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
