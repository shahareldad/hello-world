import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/modules/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];

@Component({
  selector: 'wish-filter',
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  @Output() filterWishes = new EventEmitter<any>();
  selectedFilter: string = '0';

  ngOnInit() {
    this.filterWishes.emit(filters[0]);
  }

  changeFilter(value: any) {
    this.filterWishes.emit(filters[value]);
  }
}
