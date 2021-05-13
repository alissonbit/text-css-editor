import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  gradient: string = 'linear-gradient(0deg, #000000, #ffffff)';

  constructor() {}

  ngOnInit(): void {}
  changeColor(angle: string, color1: string, color2: string) {
    this.gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }
}
