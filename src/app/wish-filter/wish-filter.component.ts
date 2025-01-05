import { Component, Output, Input, EventEmitter } from '@angular/core';
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
  @Input() filterWishes: any;
  @Output() filterWishesChange = new EventEmitter<any>(); // "Change" suffix means the output and input are connected by Angular
  selectedFilter: string = '0';

  ngOnInit() {
    // this.filterWishes.emit(filters[0]);
    this.updateFilter('0');
  }

  updateFilter(value: any) {
    this.filterWishes = filters[value];
    this.filterWishesChange.emit(this.filterWishes);
  }
}
