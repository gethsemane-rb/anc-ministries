import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up-card.component.html',
  styleUrl: './sign-up-card.component.scss'
})
export class SignUpCardComponent {

  firstName = '';
  lastName = '';
  email = '';

  submitForm() {
    console.log('Form submitted');
  }

}
