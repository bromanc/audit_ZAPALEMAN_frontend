import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaRolComponent } from './ruta-lista-rol.component';

describe('RutaListaRolComponent', () => {
  let component: RutaListaRolComponent;
  let fixture: ComponentFixture<RutaListaRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
