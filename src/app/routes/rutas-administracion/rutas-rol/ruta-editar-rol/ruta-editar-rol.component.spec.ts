import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarRolComponent } from './ruta-editar-rol.component';

describe('RutaEditarRolComponent', () => {
  let component: RutaEditarRolComponent;
  let fixture: ComponentFixture<RutaEditarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
