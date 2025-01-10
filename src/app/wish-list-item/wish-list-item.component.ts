import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import events from '../../shared/services/EventService';
import { WishItem } from '../../shared/modules/wishitem';

@Component({
  selector: 'wish-list-item',
  imports: [ NgClass ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wish!: WishItem;

  get cssClass() {
    // return this.isComplete ? [ 'strikeout', 'text-muted' ] : [];
    // return {
    //   'strikeout': this.isComplete,
    //   'text-muted': this.isComplete
    // };
    return {
      'strikeout text-muted': this.wish.isComplete,
    };
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleIsComplete() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
