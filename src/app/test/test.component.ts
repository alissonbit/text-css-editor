import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  gradient: string = 'linear-gradient(0deg, #000000, #ffffff)';

  constructor() {}
  
  ngOnInit(): void {
    let follower = document.querySelector<any>('#follower');

    document.addEventListener('mousemove', function(e){
      follower.style.left = e.pageX+'px';
      follower.style.top = e.pageY+'px';
    })
  }
  changeColor(angle: string, color1: string, color2: string) {
    this.gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }
}
