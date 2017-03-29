import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = 'd68a7c11a33ebe6edc8c';
	private client_secret = 'abd467510a662c60a7561db8cd6ac0279b9ebbc2';

	constructor(private http: Http) {
		console.log('Github service ready...');
		this.username = 'igor-pavlichenko';
	}

	getUser() {
		return 	this.http
					.get('http://api.github.com/users/' + this.username
														+ '?client_id=' + this.client_id
														+ '&client_secret=' + this.client_secret)
					.map(res => res.json());
	}

	getRepos() {
		return 	this.http
					.get('http://api.github.com/users/' + this.username
														+ '/repos?client_id=' + this.client_id
														+ '&client_secret=' + this.client_secret)
					.map(res => res.json());
	}
}
