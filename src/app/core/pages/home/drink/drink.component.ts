import { Component, Input } from '@angular/core';
import data from "../../../../menu/babidas.json";

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {

  @Input() id = 0;
  @Input() short = false;

  objet = {
    title:'',
    description:''
  }

  db = data;
}
