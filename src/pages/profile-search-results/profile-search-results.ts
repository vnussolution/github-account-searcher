import { IUser, IRepository } from './../../models/interfaces';
import { GitHubServicesProvider } from './../../providers/git-hub-services/git-hub-services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: IUser;
  repositories: IRepository[];
  constructor(private gitHubServices: GitHubServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultsPage');
  }
  ionViewWillEnter() {
    this.username = this.navParams.get('username');
    console.log(' results: ', this.username);
    if (this.username)
      this.getUserInfo();
  }

  getUserInfo() {
    this.gitHubServices.getUserInfo(this.username).subscribe((data: IUser) => this.user = data);
    this.gitHubServices.getRepoInfo(this.username).subscribe((data: IRepository[]) => {
      this.repositories = data;
    });
  }

}
