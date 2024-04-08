import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { routes } from './app.routes';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'margot-home';
}
