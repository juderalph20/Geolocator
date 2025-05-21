import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  latitude: number | null = null;
  longitude: number | null = null;
  error: string | null = null;

  constructor() {}

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.error = null;
        },
        (err) => {
          this.error = 'Geolocation error: ' + err.message;
        }
      );
    } else {
      this.error = 'Geolocation is not supported by this browser.';
    }
  }
}