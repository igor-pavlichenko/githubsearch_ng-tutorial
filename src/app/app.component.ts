import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [ GithubService ]
})
export class AppComponent {
	title = 'APP COMPONENT';
}
