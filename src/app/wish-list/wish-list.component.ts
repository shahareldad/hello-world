import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../../shared/modules/wishitem';

@Component({
  selector: 'wish-list',
  imports: [NgFor, NgIf, ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

  toggleWishItem(item: any) {
    item.isComplete = !item.isComplete;
  }
}
