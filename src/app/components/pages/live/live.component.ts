import { Component, OnInit } from '@angular/core';
import {YoutubeService } from '../../../service/youtube.service';
import { forkJoin } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-live',
  imports: [CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss'
})
export class LiveComponent {

  channelId = 'UCQzGUJSuV8dS0Sd9XhtHe4Q'; // 🔴 Replace with your channel ID
  videos: { title: string; embedUrl: SafeResourceUrl; thumbnail: string; videoId: string }[] = [];
  loading = true;

  constructor(private yt: YoutubeService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.yt.fetchLiveList(this.channelId).subscribe({
      next: (items) => {
        this.videos = items.map(v => ({
          title: v.snippet.title,
          embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${v.id.videoId}`
          ),
          thumbnail: v.snippet.thumbnails.medium.url,
          videoId : v.id.videoId
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('YouTube API Error:', err);
        this.loading = false;
      }
    });
  }

  openVideo(videoId: string) {

    console.log(videoId)
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
  cleanTitle(t: string) {
    return t.replace(/[^\w\s|:-]/g, '').trim();
  }




}
