import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  rutas: Object;

  urlPieImagen = '../../../assets/images/logo.jpg';
  urlInstagram = '../../../assets/images/instagram.png'
  urlFacebook = '../../../assets/images/facebook.png'
  urlGithub = '../../../assets/img/github.png'
  urlTwitter = '../../../assets/images/twitter.png'
  urlInstagramPage = 'https://www.instagram.com/';
  urlFacebookPage = 'https://www.facebook.com/Zapateriacalzadoaleman';
  urlTwitterPage = 'https://twitter.com/';
  

  constructor() { }

  ngOnInit(): void {
  }

}
