import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCircuitoComponent } from './ver-circuito.component';

describe('VerCircuitoComponent', () => {
  let component: VerCircuitoComponent;
  let fixture: ComponentFixture<VerCircuitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCircuitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
