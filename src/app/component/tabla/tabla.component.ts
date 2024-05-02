import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  juegos = [
    {
      id: "jo1",
      nombre: "Pac-Man",
      precio: "5",
      genero: "Maze video game",
      url: ""
    },
    {
      id: "jo2",
      nombre: "Hollow Knight",
      precio: "7",
      genero: "Metroidvania",
      url: ""
    },
    {
      id: "jo3",
      nombre: "Dark Souls 3",
      precio: "30.72",
      genero: "Acción y aventura,",
      url: ""
    },
    {
      id: "jo4",
      nombre: "Elden Ring",
      precio: "45.30",
      genero: "Rol de acción",
      url: ""
    },
    {
      id: "jo5",
      nombre: "Bloodborne",
      precio: "25.10",
      genero: "Survival horror",
      url: ""
    },
  ]

  filtro = ""
  filtro1 = 0
  filtro2 = 0
  mostrarInformacion: boolean = false;

  visualizarInformacion() {
    this.mostrarInformacion = true;
  }

}
