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

 ngOnInit(): void {
    // 1. Título de la pestaña
    this.titleService.setTitle('Litaly - Tu inicio'); // Cámbialo por tu título real

    // 2. Descripción que aparecerá en Google
    this.metaService.updateTag(
      { name: 'description', content: 'Descripción atractiva de tu página de inicio aquí.' }
    );

    // 3. (MUY IMPORTANTE) Etiqueta Canonical para evitar contenido duplicado
    this.metaService.updateTag(
      { rel: 'canonical', href: 'https://litaly.vercel.app' }
    );
  }
}
