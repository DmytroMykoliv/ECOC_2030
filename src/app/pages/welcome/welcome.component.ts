import { Component } from '@angular/core';
import { CityImgComponent } from '@shared/components';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CityImgComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}
