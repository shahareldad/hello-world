import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/modules/wishitem';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wishText!: string;
  @Input() isComplete!: boolean;
  @Output() isCompleteChange = new EventEmitter<boolean>();

  toggleIsComplete() {
    this.isComplete = !this.isComplete;
    this.isCompleteChange.emit(this.isComplete);
  }
}
