import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModifieEtudiantComponent } from './admin-modifie-etudiant.component';

describe('AdminModifieEtudiantComponent', () => {
  let component: AdminModifieEtudiantComponent;
  let fixture: ComponentFixture<AdminModifieEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModifieEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModifieEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
