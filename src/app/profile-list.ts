import { Profile } from './profile';
import { OnInit } from '@angular/core';

export class ProfileList implements OnInit {
  profiles: Profile[] = Array<Profile>();

  getDisplayLists(page, size) {
    const viewProfiles: Profile[] = Array<Profile>();
    const start = (size * (page - 1)) + 1;
    const stop = size * page;
    for (let i = start; i <= stop; i++) {
      viewProfiles.push(this.profiles[i]);
    }
    return viewProfiles;
  }

  ngOnInit() {
    const profile1: Profile = new Profile();
    profile1.name = 'Ross Geller';
    profile1.age = 32;
    profile1.address = 'Across the street';
    profile1.email = 'we.were.on.a.break@hotmail.com';
    profile1.phone = 984915512;

    const profile2: Profile = new Profile();
    profile2.name = 'Monica Geller';
    profile2.age = 29;
    profile2.address = 'In her moms apartment';
    profile2.email = 'used2Bfat@gmail.com';
    profile2.phone = 848512355;

    const profile3: Profile = new Profile();
    profile3.name = 'Rachael Green';
    profile3.age = 30;
    profile3.address = 'With monica';
    profile3.email = 'myCrush@hotmail.com';
    profile3.phone = 6565151235;

    const profile4: Profile = new Profile();
    profile4.name = 'Joey Tribbiani';
    profile4.age = 31;
    profile4.address = 'With Chandler';
    profile4.email = 'how.u@doin.com';
    profile4.phone = 98498815512;

    const profile5: Profile = new Profile();
    profile5.name = 'Chandler Bing';
    profile5.age = 35;
    profile5.address = 'With Joey';
    profile5.email = 'can.this.email.be.anymore@geniune.com';
    profile5.phone = 6666666666;

    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
  }


}
