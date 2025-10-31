import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-cards',
  imports: [CommonModule],
  templateUrl: './help-cards.component.html',
  styleUrl: './help-cards.component.scss'
})
export class HelpCardsComponent {
  helpOptions = [
      { label: "I’m new here", icon: '💬', action: 'new' },
      { label: "To know about Jesus", icon: '✝️', action: 'jesus' },
      { label: "Prayer request", icon: '📞', action: 'prayer' },
    ];

    onHelpClick(action: string) {
      console.log(`You clicked on: ${action}`);
    }
}
