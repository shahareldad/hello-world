import { Component } from '@angular/core';
import { WishItem } from '../shared/modules/wishitem';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";

@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule, WishListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To run faster'),
    new WishItem('To have some coffee', true),
    new WishItem('To learn Angular')
  ];
  get visibleItems(): WishItem[] {
    if (this.selectedFilter === '0') return this.items;
    else if (this.selectedFilter === '1') return this.items.filter((item) => !item.isComplete);
    else if (this.selectedFilter === '2') return this.items.filter((item) => item.isComplete);
    else return [];
  }

  selectedFilter: string = '0';
  title = 'hello-world';
  newWishText: string = '';

  // filterWishes(value: any) {
  //   if (value === '0') this.visibleItems = this.items;
  //   else if (value === '1') this.visibleItems = this.items.filter((item) => !item.isComplete);
  //   else if (value === '2') this.visibleItems = this.items.filter((item) => item.isComplete);
  // }
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    // this.filterWishes(this.selectedFilter);
  }
}
