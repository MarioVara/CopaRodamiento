import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiparComponent } from './equipar.component';

describe('EquiparComponent', () => {
  let component: EquiparComponent;
  let fixture: ComponentFixture<EquiparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiparComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquiparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
