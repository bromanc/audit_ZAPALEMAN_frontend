import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServicioComponent } from './formulario-servicio.component';

describe('FormularioServicioComponent', () => {
  let component: FormularioServicioComponent;
  let fixture: ComponentFixture<FormularioServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
