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
    // Título enfocado en la búsqueda local de EE.UU.
    this.titleService.setTitle('Our Menu | Little Italy - Authentic Italian Food Truck in US');
    
    // Meta descripción optimizada con palabras clave que busca el público americano
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Taste real homemade Neapolitan pizzas and Italian pasta in the United States. Check out our food truck schedule and catering services.' 
    });

    // Etiquetas Open Graph (Para que se vea increíble cuando lo compartas por WhatsApp o Facebook)
    this.metaService.updateTag({ property: 'og:title', content: 'Little Italy Food Truck - Authentic Italian Menu' });
    this.metaService.updateTag({ property: 'og:description', content: 'The finest handcrafted Italian cuisine on wheels in the US.' });
    this.metaService.updateTag({ property: 'og:image', content: 'assets/dark-slate.jpg' });
  }
}
