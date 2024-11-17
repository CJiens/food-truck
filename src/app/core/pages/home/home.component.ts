import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PlatosComponent } from './platos/platos.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeroComponent,PlatosComponent,BienvenidosComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
