import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCategoriesComponent } from './grid-categories.component';

describe('GridCategoriesComponent', () => {
  let component: GridCategoriesComponent;
  let fixture: ComponentFixture<GridCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCategoriesComponent]
    });
    fixture = TestBed.createComponent(GridCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
