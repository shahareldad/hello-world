import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import events from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  imports: [ NgClass ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wishText!: string;
  @Input() isComplete!: boolean;
  @Output() isCompleteChange = new EventEmitter<boolean>();

  get cssClass() {
    // return this.isComplete ? [ 'strikeout', 'text-muted' ] : [];
    // return {
    //   'strikeout': this.isComplete,
    //   'text-muted': this.isComplete
    // };
    return {
      'strikeout text-muted': this.isComplete,
    };
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
    this.isCompleteChange.emit(this.isComplete);
  }
}
