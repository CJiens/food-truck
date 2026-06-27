import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PlatosComponent } from './platos/platos.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { FooterComponent } from './footer/footer.component';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    PlatosComponent,
    BienvenidosComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

ngOnInit() {
    // 1. Cambia el título de la pestaña del navegador
    this.titleService.setTitle('Menu | Little Italy - Authentic Italian Food Truck in US');
    
    // 2. Modifica la descripción que sale en los resultados de Google
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Discover the best Italian Food Truck menu in the United States. Authentic Italian pizzas, drinks, and fresh ingredients near you.' 
    });
  }
}
