import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    getActiveClass(isActive: boolean):{}
    {
        return {
            'nav-item': true, 
            'nav-link': true,
            'active-pers': (isActive)
        }
    }
}