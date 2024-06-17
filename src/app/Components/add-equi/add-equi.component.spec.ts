import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquiComponent } from './add-equi.component';

describe('AddEquiComponent', () => {
  let component: AddEquiComponent;
  let fixture: ComponentFixture<AddEquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEquiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
