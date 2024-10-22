import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  router = inject(Router);

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/swiper']);
    }, 3000);
  }
}
