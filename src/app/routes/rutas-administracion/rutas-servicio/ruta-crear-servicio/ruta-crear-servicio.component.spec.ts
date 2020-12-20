import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearServicioComponent } from './ruta-crear-servicio.component';

describe('RutaCrearServicioComponent', () => {
  let component: RutaCrearServicioComponent;
  let fixture: ComponentFixture<RutaCrearServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
