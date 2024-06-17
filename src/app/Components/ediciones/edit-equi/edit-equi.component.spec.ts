import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquiComponent } from './edit-equi.component';

describe('EditEquiComponent', () => {
  let component: EditEquiComponent;
  let fixture: ComponentFixture<EditEquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEquiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
