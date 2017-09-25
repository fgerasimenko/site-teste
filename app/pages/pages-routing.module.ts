import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';


const routes: Routes = [
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    { 
        path: 'about', 
        component: AboutComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
