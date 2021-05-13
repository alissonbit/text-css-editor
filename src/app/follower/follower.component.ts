import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss'],
})
export class FollowerComponent implements OnInit {
  nFollowers: number = 20;
  arrFollowers: Array<number> = [];
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    while (this.counter < this.nFollowers) {
      this.arrFollowers.push(1);
      this.counter++;
    }
    window.addEventListener('load', function () {
      let followers = document.querySelectorAll<any>('.follower');
      let multiplier = 0;

      followers.forEach((follower) => {
        follower.style.transition = `all ${multiplier}s`;
        follower.style.transform = `translate(-50%, -50%) scale(${multiplier*4})`;
        multiplier=multiplier+0.02;
      });
      document.addEventListener('mousemove', function (e) {
        followers.forEach((follower) => {
          follower.style.left = e.pageX + 'px';
          follower.style.top = e.pageY + 'px';
        });
      });
    });
  }
}
