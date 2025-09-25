import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';

export const routes: Routes = [
    {
        path:'',
        component: HeroPageComponent
    }/* ,
    {
        path: '/hero',
        component: HeroPageComponent
    } */
];
