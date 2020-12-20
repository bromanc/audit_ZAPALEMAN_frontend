import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaServicioComponent } from './ruta-lista-servicio.component';

describe('RutaListaServicioComponent', () => {
  let component: RutaListaServicioComponent;
  let fixture: ComponentFixture<RutaListaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
