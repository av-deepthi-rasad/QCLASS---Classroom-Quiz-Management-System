import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClasesComponent } from './create-clases.component';

describe('CreateClasesComponent', () => {
  let component: CreateClasesComponent;
  let fixture: ComponentFixture<CreateClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateClasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
