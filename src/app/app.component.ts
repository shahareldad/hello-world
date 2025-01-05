import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishitem';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  imports: [WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  items: WishItem[] = [ ];
  
  // new filter event handling
  filter: any;
  // old filter event handling
  // filter: any = () => {};
}
