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
  profileList: ProfileList;
  profiles: Profile[];

  resetSearchParam() {
    // some reset code here
  }

  pageChanged(event: PageChangedEvent) {
    console.log('Page Change Event: [Page:' + event.page + ', Size:' + event.itemsPerPage);
    if (event) {
      this.page = event.page;
      this.profiles = this.profileList.getDisplayLists(event.page, event.itemsPerPage);
    } else {
      this.page = 1;
      this.profiles = this.profileList.getDisplayLists(this.page, this.size);
    }
    console.log('Page Changed: ' + this.profiles);
  }
  ngOnInit() {
    this.profileList = new ProfileList();
    this.page = 1;
    this.size = 5;
    this.profiles = this.profileList.getDisplayLists(this.page, this.size);

    console.log('New profile list: ' + this.profileList.profiles);
    console.log('Initial data: ' + this.profiles);
    this.totalItems = this.profileList.profiles.length;

  }

}
