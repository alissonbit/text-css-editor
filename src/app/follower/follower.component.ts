import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss'],
})
export class FollowerComponent implements OnInit {
  nFollowers: number = 40;
  arrFollowers: Array<number> = [];
  counter: number = 0;
  firstTime: boolean = true;

  constructor() {}

  ngOnInit(): void {
    while (this.counter < this.nFollowers) {
      this.arrFollowers.push(1);
      this.counter++;
    }
    window.addEventListener('load', function () {
      let followers = document.querySelectorAll<any>('.follower');
      let multiplier = 0.5;
      let randomMoving = false;
      let mouseMoving = false;
      let mousePosition: MouseEvent;

      followers.forEach((follower) => {
        follower.style.transition = `all ${multiplier}s`;
        follower.style.transform = `translate(-50%, -50%) `;
        multiplier = multiplier + 0.03;
      });

      document.addEventListener('mousemove', function (e) {
        mouseMoving = true;
        mousePosition = e;

        if (!randomMoving) {
          randomMoving = true;
          setTimeout(() => {
            randomMoving = false;
          }, 100);

          followers.forEach((follower) => {
            let randomPosX =
              Math.floor(Math.random() * 200 - 100) + e.pageX + 'px';
            let randomPosY =
              Math.floor(Math.random() * 200 - 100) + e.pageY + 'px';
            follower.style.left = randomPosX;
            follower.style.top = randomPosY;
          });
        }
        mouseMoving = false;
      });

      document.addEventListener('mousemove', ()=>{
        followers.forEach((follower) => {
          setTimeout(() => {
            follower.style.left = mousePosition.pageX + 'px';
            follower.style.top = mousePosition.pageY + 'px';
          }, multiplier * 1000);
        });
      })
    });
  }
}
