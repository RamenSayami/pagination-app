import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { PageChangedEvent, PaginationComponent } from 'ngx-bootstrap';
import { ProfileList } from './profile-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  page: number;
  size: number;
  totalItems: number;
  profileList: ProfileList = new ProfileList();
  profiles: Profile[];

  resetSearchParam() {
    // some reset code here
  }

  pageChanged(event: PageChangedEvent) {
    // event:
    // if (event) {
    //   this.
    // } else {

    // }
  }
  ngOnInit() {
    this.page = 1;
    this.profiles = this.profileList.getDisplayLists(this.page, this.size);
    this.totalItems = this.profiles.length;
    this.size = 3;

  }

}
