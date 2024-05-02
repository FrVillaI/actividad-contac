import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error4004Component } from './pages/error4004/error4004.component';
import { DetallesJuegosComponent } from './pages/detalles-juegos/detalles-juegos.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'juegos', component: JuegosComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'detalle-juegos/:idJuegos', component: DetallesJuegosComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: Error4004Component }
];
