import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-timing',
  templateUrl: './service-timing.component.html',
  styleUrls: ['./service-timing.component.scss'],
    imports: [CommonModule],   // 👈 REQUIRED for *ngFor, *ngIf
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class  ServiceTimingComponent {
  tilesPerSlide = 3;

  tiles= [
    { title: 'Sunday Service', time: '9:30 AM', image: 'assets/images/schedule/sunday.png' },
    { title: 'Sunday school', time: '10:00 AM', image: 'assets/images/schedule/sunday_school.png' },
    { title: 'Youth Fellowship', time: '5:00 PM', image: 'assets/images/schedule/tuesday.png' },
    { title: 'Fasting Prayer', time: '6:00 AM', image: 'assets/images/schedule/fasting.png' },
    { title: 'Bible Study', time: '7:00 PM', image: 'assets/images/schedule/bible_study.png' }
  ];

  currentSlide = 0;

    /** Auto-calc slide count */
    get totalSlides() {
      return Math.ceil(this.tiles.length / this.tilesPerSlide);
    }

    /** CAROUSEL CONTROL */
    goToSlide(i: number) {
      this.currentSlide = i;
    }

    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    }

    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    }

    /** DYNAMIC TILE CONTROL */
    addTile() {
      this.tiles.push({
        title: 'New Service',
        time: '10:00 AM',
        image: 'assets/schedule/default.jpg'
      });
    }

    updateTilesPerSlide(num: number) {
      this.tilesPerSlide = num;
      this.currentSlide = 0; // reset to avoid overflow
    }

    removeTile(index: number) {
      this.tiles.splice(index, 1);
    }

    /** 3D tilt effect */
    tilt(event: MouseEvent, card: HTMLElement) {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      const rotateX = (y / rect.height) * 12;
      const rotateY = (x / rect.width) * -12;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    }

    reset(card: HTMLElement) {
      if (!card) return;
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    }
}
