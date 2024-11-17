import { Component, Input } from '@angular/core';
import data from "../../../../menu/menu.json";

@Component({
  selector: 'app-platill',
  standalone: true,
  imports: [],
  templateUrl: './platill.component.html',
  styleUrl: './platill.component.css'
})
export class PlatillComponent {

  @Input() id = 0;
  @Input() short = false;
  @Input() nombre = "";

  objet = {
    title:'',
    description:''
  }

  db = data;
}
