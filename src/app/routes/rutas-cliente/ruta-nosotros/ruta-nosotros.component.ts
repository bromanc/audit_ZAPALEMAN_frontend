import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-nosotros',
  templateUrl: './ruta-nosotros.component.html',
  styleUrls: ['./ruta-nosotros.component.css']
})
export class RutaNosotrosComponent implements OnInit {

  urlBannerNosotros: string = 'assets/images/nosotros-banner.jpg';
  urlImagenNosotros: string = 'assets/images/nosotros-image.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
