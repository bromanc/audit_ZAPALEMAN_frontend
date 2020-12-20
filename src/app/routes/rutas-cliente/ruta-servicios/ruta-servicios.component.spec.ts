import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaServiciosComponent } from './ruta-servicios.component';

describe('RutaServiciosComponent', () => {
  let component: RutaServiciosComponent;
  let fixture: ComponentFixture<RutaServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
