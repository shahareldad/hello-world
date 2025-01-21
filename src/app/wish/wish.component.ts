import { Component } from '@angular/core';
import { WishListComponent } from "../wish/wish-list/wish-list.component";
import { AddWishFormComponent } from '../wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../wish/wish-filter/wish-filter.component';
import { WishItem } from '../../shared/modules/wishitem';
import { EventService } from '../../shared/services/EventService';
import { WishRepoService } from '../wish/wish-repo.service';

@Component({
  selector: 'app-wish',
  imports: [ WishListComponent, AddWishFormComponent, WishFilterComponent ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {

  items: WishItem[] = [ ];

  constructor(events: EventService, private wishRepo: WishRepoService) { 
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishRepo.getWishes().subscribe(
      (wishes: any) => {
        this.items = wishes;
      },
      (error: any) => {
        alert(error.message);
      }
    );

    this.filter = '0';
  }

  filter: any;
}
