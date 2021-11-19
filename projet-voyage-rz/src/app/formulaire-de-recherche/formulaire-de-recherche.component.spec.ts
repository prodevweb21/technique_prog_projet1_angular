import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeRechercheComponent } from './formulaire-de-recherche.component';

describe('FormulaireDeRechercheComponent', () => {
  let component: FormulaireDeRechercheComponent;
  let fixture: ComponentFixture<FormulaireDeRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireDeRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
