import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        PagesModule
    ],
    declarations: [
        AppComponent

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}