import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AffichageEmployesPage } from './affichage-employes.page';

describe('AffichageEmployesPage', () => {
  let component: AffichageEmployesPage;
  let fixture: ComponentFixture<AffichageEmployesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AffichageEmployesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
