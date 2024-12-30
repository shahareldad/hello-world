import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishitem';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    // new WishItem('To run faster'),
    // new WishItem('To have some coffee', true),
    // new WishItem('To learn Angular')
  ];
  title = 'hello-world';
  newWishText: string = '';

  toggleWishItem(item: any) {
    item.isComplete = !item.isComplete;
    // console.dir(item);
  }
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
