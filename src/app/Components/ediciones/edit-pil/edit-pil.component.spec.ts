import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPilComponent } from './edit-pil.component';

describe('EditPilComponent', () => {
  let component: EditPilComponent;
  let fixture: ComponentFixture<EditPilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
