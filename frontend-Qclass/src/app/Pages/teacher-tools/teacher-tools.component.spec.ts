import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherToolsComponent } from './teacher-tools.component';

describe('TeacherToolsComponent', () => {
  let component: TeacherToolsComponent;
  let fixture: ComponentFixture<TeacherToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
