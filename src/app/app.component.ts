import { Component, OnInit } from '@angular/core';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component'; 

@Component({
  selector: 'app-root',
  imports: [ WishComponent, ContactComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {

  }
}
