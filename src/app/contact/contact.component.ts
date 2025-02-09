import { Component, importProvidersFrom } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ NgIf, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', [ Validators.required ]),
    senderEmail: new FormControl('', [ Validators.required, Validators.email ]),
    senderMessage: new FormControl('', [  Validators.required, Validators.minLength(10) ])
  });

  // senderNameControl = new FormControl('');
  // senderEmailControl = new FormControl('');
  // senderMessageControl = new FormControl('');
  submitForm() {
    // console.log(this.contactForm.valid);
    // if (this.contactForm.valid) {
    //   alert('senderName: ' + this.contactForm.value.senderName + ', ' +
    //   'senderEmail: ' + this.contactForm.value.senderEmail + ', ' +
    //   'senderMessage: ' + this.contactForm.value.senderMessage);
    // }
  }

}
