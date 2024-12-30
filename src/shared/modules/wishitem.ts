// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-wishitem',    
//     templateUrl: './wishitem.component.html',
//     styleUrls: ['./wishitem.component.css']
// })
export class WishItem {
    constructor(public wishText: string, public isComplete: boolean = false) {
        
    }
}