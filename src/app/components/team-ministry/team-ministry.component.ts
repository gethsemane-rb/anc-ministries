import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-ministry',
  imports: [CommonModule],
  templateUrl: './team-ministry.component.html',
  styleUrl: './team-ministry.component.scss'
})
export class TeamMinistryComponent {
 ministries = [
    {
      name: 'Mahesh',
      role: 'Worship Ministry',
      image: 'assets/images/people/mahesh.png'
    },
    {
      name: 'Roshan',
      role: 'Worship Ministry',
      image: 'assets/images/people/roshan.png'
    },
    {
      name: 'Brijesh',
      role: 'Kids Ministry',
      image: 'assets/images/people/brijesh.png'
    }
  ];
}
