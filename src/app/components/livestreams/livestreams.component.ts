import { Component } from '@angular/core';
import { LiveStreamsComponent } from '../live-streams/live-streams.component';

@Component({
  selector: 'app-livestreams',
  imports: [LiveStreamsComponent],
  templateUrl: './livestreams.component.html',
  styleUrl: './livestreams.component.scss'
})
export class LivestreamsComponent {
 streams = [
    { title: 'Sunday Service', thumb: 'assets/images/sunday.jpg', duration: '2:48'},
    { title: 'Mid Week Service', thumb: 'assets/images/midweek.jpg', duration: '1:19:15'},
    { title: 'Sunday Worship', thumb: 'assets/images/service.jpg', duration: '2:55:00', live:true}
  ];
}
