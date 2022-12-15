import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangkatComponent } from './pangkat.component';

describe('PangkatComponent', () => {
  let component: PangkatComponent;
  let fixture: ComponentFixture<PangkatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangkatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PangkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
