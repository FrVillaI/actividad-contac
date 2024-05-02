import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-juegos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './detalles-juegos.component.html',
  styleUrl: './detalles-juegos.component.css'
})
export class DetallesJuegosComponent {

  ruta = inject(ActivatedRoute)

  juegos = [
    {
      id: "jo1",
      nombre: "Pac-Man",
      precio: "5",
      genero: "Maze video game",
      url: "https://store-images.s-microsoft.com/image/apps.15585.13969479857253626.55eac3f2-7b71-4cee-a637-94d8622e6bec.68eff3cb-3bd3-4968-9f36-a4b2e023bb88?mode=scale&q=90&h=300&w=300"
    },
    {
      id: "jo2",
      nombre: "Hollow Knight",
      precio: "7",
      genero: "Metroidvania",
      url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/hollow-knight-1943657.jpg?tf=1200x"
    },
    {
      id: "jo3",
      nombre: "Dark Souls 3",
      precio: "30,72",
      genero: "Acción y aventura,",
      url: "https://store-images.s-microsoft.com/image/apps.26308.65765405318615559.1860d263-d982-466f-947a-523231ff1c3f.5ed26900-c677-4743-a9f1-67a46b866cd6?q=90&w=177&h=265"
    },
    {
      id: "jo4",
      nombre: "Elden Ring",
      precio: "45,30",
      genero: "Rol de acción",
      url: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/Starter_Guide/Elden_Ring_game_screen.jpg"
    },
    {
      id: "jo5",
      nombre: "Bloodborne",
      precio: "25,10",
      genero: "Survival horror",
      url: "https://media.wired.com/photos/5955c1dc5992c54331ac192f/master/w_1600,c_limit/bloodborne_the_old_hunters_V2.jpg"
    },
  ]

  juego: any
  id: any
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      console.log(p['idJuegos'])
      this.id = p['idJuegos']

      this.juegos.forEach(element => {
        if (element.id == this.id) {
          this.juego = element
        }
      });

    })
  }

}
