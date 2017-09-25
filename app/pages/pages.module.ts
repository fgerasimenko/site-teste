import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        AboutComponent
    ],
    imports: [ 
        CommonModule,
        PagesRoutingModule 
    ],
    exports: [
        HomeComponent,
        ContactComponent,
        AboutComponent
    ]
    // providers: []
})
export class PagesModule {}