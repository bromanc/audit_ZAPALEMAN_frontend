import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNosotrosComponent } from './ruta-nosotros.component';

describe('RutaNosotrosComponent', () => {
  let component: RutaNosotrosComponent;
  let fixture: ComponentFixture<RutaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
