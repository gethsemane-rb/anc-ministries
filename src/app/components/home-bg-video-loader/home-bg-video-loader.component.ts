import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-bg-video-loader',
  imports: [],
  templateUrl: './home-bg-video-loader.component.html',
  styleUrl: './home-bg-video-loader.component.scss'
})
export class HomeBgVideoLoaderComponent {

 @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

   playlist: string[] = [
     'assets/video/bg_video1.mp4',
     'assets/video/bg_video2.mp4',
     'assets/video/bg_video3.mp4'
   ];

   index: number = 0;

   ngAfterViewInit(): void {
     const video = this.heroVideo.nativeElement;
     video.src = this.playlist[this.index];

     video.onended = () => {
       this.index++;
       if (this.index < this.playlist.length) {
         video.src = this.playlist[this.index];
         video.play();
       } else {
         // restart from first video (loop behavior)
         this.index = 0;
         video.src = this.playlist[this.index];
         video.play();
       }
     };
   }


}
