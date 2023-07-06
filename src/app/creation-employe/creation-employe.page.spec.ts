import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationEmployePage } from './creation-employe.page';

describe('CreationEmployePage', () => {
  let component: CreationEmployePage;
  let fixture: ComponentFixture<CreationEmployePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreationEmployePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
