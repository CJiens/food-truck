import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { MenuComponent } from './core/pages/menu/menu/menu.component';
import { AboutComponent } from './core/pages/about/about.component';



export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,

    },
    {
        path:'',redirectTo:'/home',pathMatch:'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
{
    path:'about',
    component:AboutComponent
}

];
