import { Component, importProvidersFrom } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { createInvalidEmailDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidEmailDomainValidator(['gmail.com', 'yahoo.com']);

@Component({
  selector: 'app-contact',
  imports: [ NgIf, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    senderName: new FormControl('', [ Validators.required ]),
    senderEmail: new FormControl('', [ Validators.required, Validators.email, invalidEmailDomain ]),
    senderMessage: new FormControl('', [  Validators.required, Validators.minLength(10) ])
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }

}
