import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormulaireForfaitsComponent } from './dialog-formulaire-forfaits.component';

describe('DialogFormulaireForfaitsComponent', () => {
  let component: DialogFormulaireForfaitsComponent;
  let fixture: ComponentFixture<DialogFormulaireForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormulaireForfaitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormulaireForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
