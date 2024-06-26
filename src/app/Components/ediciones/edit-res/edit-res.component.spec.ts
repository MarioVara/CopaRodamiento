import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResComponent } from './edit-res.component';

describe('EditResComponent', () => {
  let component: EditResComponent;
  let fixture: ComponentFixture<EditResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
