import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  profiles: Profile[] = Array<Profile>();

  resetSearchParam() {
    // some reset code here
  }

  ngOnInit() {
    const profile1: Profile = new Profile();
    profile1.name = 'Ross Geller';
    profile1.age = 32;
    profile1.address = 'Across the street';
    profile1.email = 'we.were.on.a.break@hotmail.com';
    profile1.phone = 984915512;

    const profile2: Profile = new Profile();
    profile1.name = 'Monica Geller';
    profile1.age = 29;
    profile1.address = 'In her moms apartment';
    profile1.email = 'used2Bfat@gmail.com';
    profile1.phone = 848512355;

    const profile3: Profile = new Profile();
    profile1.name = 'Rachael Green';
    profile1.age = 30;
    profile1.address = 'With monica';
    profile1.email = 'myCrush@hotmail.com';
    profile1.phone = 6565151235;

    const profile4: Profile = new Profile();
    profile1.name = 'Joey Tribbiani';
    profile1.age = 31;
    profile1.address = 'With Chandler';
    profile1.email = 'how.u@doin.com';
    profile1.phone = 98498815512;

    const profile5: Profile = new Profile();
    profile1.name = 'Chandler Bing';
    profile1.age = 35;
    profile1.address = 'With Joey';
    profile1.email = 'can.this.email.be.anymore@geniune.com';
    profile1.phone = 6666666666;

    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
  }

}
