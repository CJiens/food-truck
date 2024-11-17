import { Component } from '@angular/core';
import { PlatillComponent } from '../platill/platill.component';
import { DrinkComponent } from "../drink/drink.component";

@Component({
  selector: 'app-bienvenidos',
  standalone: true,
  imports: [PlatillComponent, DrinkComponent],
  templateUrl: './bienvenidos.component.html',
  styleUrl: './bienvenidos.component.css'
})



export class BienvenidosComponent {






}
