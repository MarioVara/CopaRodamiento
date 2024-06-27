import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPilotosComponent } from './ver-pilotos.component';

describe('VerPilotosComponent', () => {
  let component: VerPilotosComponent;
  let fixture: ComponentFixture<VerPilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPilotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
