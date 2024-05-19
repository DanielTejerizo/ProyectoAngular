import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModulo } from '../../_modulo/MaterialModulo';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, MaterialModulo],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
