import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2PageComponent } from './welcome2-page.component';

describe('Welcome2PageComponent', () => {
  let component: Welcome2PageComponent;
  let fixture: ComponentFixture<Welcome2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Welcome2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Welcome2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
