import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaProductoComponent } from './ruta-lista-producto.component';

describe('RutaListaProductoComponent', () => {
  let component: RutaListaProductoComponent;
  let fixture: ComponentFixture<RutaListaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
