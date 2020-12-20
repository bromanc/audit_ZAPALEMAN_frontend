import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearRolComponent } from './ruta-crear-rol.component';

describe('RutaCrearRolComponent', () => {
  let component: RutaCrearRolComponent;
  let fixture: ComponentFixture<RutaCrearRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
