import { Component } from '@angular/core';
import { TablaComponent } from '../../component/tabla/tabla.component';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

}
