import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth.service';

@Component({
	selector: 'app-user-account',
	templateUrl: './user-account.component.html',
	styleUrls: [ './user-account.component.scss' ]
})
export class UserAccountComponent implements OnInit {
	loggedUser: User;
	// Enable Update Button

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.loggedUser = this.authService.getLoggedInUser();
	}
}
