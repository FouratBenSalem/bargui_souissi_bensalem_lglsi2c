import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieEtudiantComponent } from './modifie-etudiant.component';

describe('ModifieEtudiantComponent', () => {
  let component: ModifieEtudiantComponent;
  let fixture: ComponentFixture<ModifieEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
