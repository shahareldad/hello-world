import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/modules/wishitem';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [ ];
  
  get visibleItems(): WishItem[] {
    if (this.selectedFilter === '0') return this.items;
    else if (this.selectedFilter === '1') return this.items.filter((item) => !item.isComplete);
    else if (this.selectedFilter === '2') return this.items.filter((item) => item.isComplete);
    else return [];
  }

  selectedFilter: string = '0';
  title = 'hello-world';
}
