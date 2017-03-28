import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
	selector: 'profile', // tslint:disable-line
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	private user: any[];

	constructor(private githubService: GithubService) {
		this.githubService.getUser().subscribe(user => {
			this.user = user;
		});
	}

	ngOnInit() {
	}

}
