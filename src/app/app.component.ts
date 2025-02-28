import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuBarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tune-hub';

  constructor(private translate: TranslateService, private http: HttpClient) {
     this.translate.setDefaultLang('es');

  }
}
