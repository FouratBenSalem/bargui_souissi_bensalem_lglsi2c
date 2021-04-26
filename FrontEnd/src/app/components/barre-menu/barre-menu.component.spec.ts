import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreMenuComponent } from './barre-menu.component';

describe('BarreMenuComponent', () => {
  let component: BarreMenuComponent;
  let fixture: ComponentFixture<BarreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
