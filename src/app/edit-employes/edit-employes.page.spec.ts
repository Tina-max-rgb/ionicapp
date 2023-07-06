import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEmployesPage } from './edit-employes.page';

describe('EditEmployesPage', () => {
  let component: EditEmployesPage;
  let fixture: ComponentFixture<EditEmployesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditEmployesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
