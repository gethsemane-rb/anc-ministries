import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {LivestreamsComponent} from './components/livestreams/livestreams.component';
import {HelpCardsComponent} from './components/help-cards/help-cards.component';
import {MinistriesComponent} from './components/ministries/ministries.component';
import {LiveStreamsComponent} from './components/live-streams/live-streams.component';
import {YoutubeService} from './service/youtube.service';
import { CommonModule } from '@angular/common';
import {QuotesComponent} from './components/quotes/quotes.component';
import {PastorInfoComponent} from './components/pastor-info/pastor-info.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {JoinCommunityComponent} from './components/join-community/join-community.component';
import {ServiceTimingComponent} from './components/service-timing/service-timing.component';
import {MonthlyPromiseComponent} from './components/monthly-promise/monthly-promise.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,HeaderComponent,FooterComponent,HomeComponent,LivestreamsComponent,HelpCardsComponent,
  MinistriesComponent,QuotesComponent,PastorInfoComponent,SignUpComponent,JoinCommunityComponent,ServiceTimingComponent,MonthlyPromiseComponent],
  providers: [YoutubeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amen_namsan_church';
}
