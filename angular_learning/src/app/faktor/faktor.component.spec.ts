import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktorComponent } from './faktor.component';

describe('FaktorComponent', () => {
  let component: FaktorComponent;
  let fixture: ComponentFixture<FaktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
