import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarServicioComponent } from './ruta-editar-servicio.component';

describe('RutaEditarServicioComponent', () => {
  let component: RutaEditarServicioComponent;
  let fixture: ComponentFixture<RutaEditarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
