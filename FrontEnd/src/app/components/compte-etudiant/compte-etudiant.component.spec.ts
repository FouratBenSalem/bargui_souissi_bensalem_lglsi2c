import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEtudiantComponent } from './compte-etudiant.component';

describe('CompteEtudiantComponent', () => {
  let component: CompteEtudiantComponent;
  let fixture: ComponentFixture<CompteEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
