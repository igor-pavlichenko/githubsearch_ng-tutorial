import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = 'd68a7c11a33ebe6edc8c';
	private client_secret = 'abd467510a662c60a7561db8cd6ac0279b9ebbc2';

	constructor() {
		console.log('Github service ready...');
		this.username = 'igor-pavlichenko';
	}

}
