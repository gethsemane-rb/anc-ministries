import { Component } from '@angular/core';

import {HomeBgVideoLoaderComponent} from '../../home-bg-video-loader/home-bg-video-loader.component';
import {LivestreamsComponent} from '../../livestreams/livestreams.component';
import {HelpCardsComponent} from '../..//help-cards/help-cards.component';
import {MinistriesComponent} from '../../ministries/ministries.component';
import {LiveStreamsComponent} from '../../live-streams/live-streams.component';

import {QuotesComponent} from '../../quotes/quotes.component';
import {PastorInfoComponent} from '../../pastor-info/pastor-info.component';
import {SignUpComponent} from '../../sign-up/sign-up.component';
import {JoinCommunityComponent} from '../../join-community/join-community.component';
import {ServiceTimingComponent} from '../../service-timing/service-timing.component';
import {MonthlyPromiseComponent} from './../../monthly-promise/monthly-promise.component';
import {SignUpCardComponent} from './../../sign-up-card/sign-up-card.component';
import {OurBeliefComponent} from './../../our-belief/our-belief.component';


@Component({
  selector: 'app-home',

   standalone: true,

  imports: [HomeBgVideoLoaderComponent,LivestreamsComponent,HelpCardsComponent,
              MinistriesComponent,QuotesComponent,JoinCommunityComponent,ServiceTimingComponent,MonthlyPromiseComponent,SignUpCardComponent,OurBeliefComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
