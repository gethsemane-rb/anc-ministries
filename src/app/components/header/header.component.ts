import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink,RouterLinkWithHref ,RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
    templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

   ngAfterViewInit() {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          // Trigger animation if needed
        });
    }
}
