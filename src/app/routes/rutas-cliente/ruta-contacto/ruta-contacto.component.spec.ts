import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaContactoComponent } from './ruta-contacto.component';

describe('RutaContactoComponent', () => {
  let component: RutaContactoComponent;
  let fixture: ComponentFixture<RutaContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
