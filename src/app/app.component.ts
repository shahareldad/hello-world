import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishitem';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  imports: [WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  items: WishItem[] = [ ];

  constructor() { 
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit() {
    this.items.push(new WishItem('Master Angular app 1'));
    this.items.push(new WishItem('Master Angular app 2'));
    this.items.push(new WishItem('Master Angular app 3'));
    this.items.push(new WishItem('Master Angular app 4'));
    this.items.push(new WishItem('Master Angular app 5'));
    this.items.push(new WishItem('Master Angular app 6'));
    this.items.push(new WishItem('Master Angular app 7'));
    this.items.push(new WishItem('Master Angular app 8'));
    this.items.push(new WishItem('Master Angular app 9'));

    this.filter = '0';
  }

  // new filter event handling
  filter: any;
  // old filter event handling
  // filter: any = () => {};
}
