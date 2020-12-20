import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  rutas: Object;

  constructor() { }

  ngOnInit(): void {
  }
  
}
