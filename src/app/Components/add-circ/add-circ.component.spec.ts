import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircComponent } from './add-circ.component';

describe('AddCircComponent', () => {
  let component: AddCircComponent;
  let fixture: ComponentFixture<AddCircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCircComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
