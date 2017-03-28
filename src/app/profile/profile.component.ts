import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
	selector: 'profile', // tslint:disable-line
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	constructor(private githubService: GithubService) {
		this.githubService.getUser().subscribe(user => {
			console.log(user);
		});
	}

	ngOnInit() {
	}

}
