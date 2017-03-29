import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
	selector: 'profile', // tslint:disable-line
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	private user: any;
	private repos: any[];
	private username: string;

	constructor(private githubService: GithubService) {
		this.user = false;
	}

	ngOnInit() {
	}

	searchUser() {
		this.githubService.updateUser(this.username);

		this.githubService.getUser().subscribe(user => {
			this.user = user;
		});

		this.githubService.getRepos().subscribe(repos => {
			this.repos = repos;
		});
	}

}
