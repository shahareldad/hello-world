import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/modules/wishitem';
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';
import { WishRepoService } from './wish-repo.service';

@Component({
  selector: 'app-root',
  imports: [ WishListComponent, AddWishFormComponent, WishFilterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hello-world';
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
