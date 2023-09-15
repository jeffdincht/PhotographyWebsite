import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteVComponent } from './teste-v.component';

describe('TesteVComponent', () => {
  let component: TesteVComponent;
  let fixture: ComponentFixture<TesteVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteVComponent]
    });
    fixture = TestBed.createComponent(TesteVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
