import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`
})
export class ProfileComponent { 
    // bring data into template

    user: any[];
    repos: any[];

    constructor(private _githubService: GithubService){
        this._githubService.getUser().subscribe(user => {
            // makes info accessible in html template
            this.user = user;
            //console.log(user);
        });

        this._githubService.getRepos().subscribe(repos => {
            // makes info accessible in html template
            this.repos = repos;
            //console.log(user);
        });
    }
}
