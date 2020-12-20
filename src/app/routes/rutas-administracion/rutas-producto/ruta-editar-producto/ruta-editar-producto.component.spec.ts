import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarProductoComponent } from './ruta-editar-producto.component';

describe('RutaEditarProductoComponent', () => {
  let component: RutaEditarProductoComponent;
  let fixture: ComponentFixture<RutaEditarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
