import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tune-hub';
}
