import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule} from '@angular/common'
import AOS from 'aos';

import data from '../../../../menu/menu.json';
import data1 from '../../../../menu/babidas.json'


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  type: boolean = false;
  items: any[] = data;
  bebidas: any[] = data1;

  constructor() {

  }


  onPlatos() {
    this.type = false;
  }

  onBebidas() {
    this.type = true;
  }

  ngOnInit() {
    AOS.init();
  }



}
