import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulledApartComponent } from './pulled-apart.component';

describe('PulledApartComponent', () => {
  let component: PulledApartComponent;
  let fixture: ComponentFixture<PulledApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulledApartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulledApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
