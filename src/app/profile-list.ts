import { Profile } from './profile';
import { OnInit } from '@angular/core';

export class ProfileList implements OnInit {
  profiles: Profile[] = Array<Profile>();

  constructor() {
    console.log('Constructor called');
    this.ngOnInit();
  }

  getDisplayLists(page, size) {
    const viewProfiles: Profile[] = Array<Profile>();
    const start = (size * (page - 1));
    let stop = (size * page) - 1;
    if (stop > this.profiles.length - 1) {
      stop = this.profiles.length - 1;
    }
    for (let i = start; i <= stop; i++) {
      console.log('i: ' + i);
      console.log('Pushing' + this.profiles[i] + ' into new page.');
      viewProfiles.push(this.profiles[i]);
    }
    console.log('New page elements: ' + viewProfiles);
    return viewProfiles;
  }

  ngOnInit() {
    console.log('On init called');
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
    profile5.email = 'can.this.email.be.more@geniune.com';
    profile5.phone = 6666666666;

    const profile6: Profile = new Profile();
    profile6.name = 'Phoebe Buffay';
    profile6.age = 29;
    profile6.address = 'Mark?';
    profile6.email = 'regina.phalange@smellycat.com';
    profile6.phone = 14789653;

    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
    this.profiles.push(profile6);
    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
    this.profiles.push(profile6);
    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
    this.profiles.push(profile6);
    this.profiles.push(profile1);
    this.profiles.push(profile2);
    this.profiles.push(profile3);
    this.profiles.push(profile4);
    this.profiles.push(profile5);
    this.profiles.push(profile6);

    console.log('Initial data populated: ' + JSON.stringify(this.profiles));
  }


}
