import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieAdminComponent } from './modifie-admin.component';

describe('ModifieAdminComponent', () => {
  let component: ModifieAdminComponent;
  let fixture: ComponentFixture<ModifieAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
