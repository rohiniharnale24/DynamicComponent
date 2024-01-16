import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss'],
})
export class HeroAddComponent implements OnInit {
  @Input() headline!: string;
  @Input() body!: string;
  constructor() {}

  ngOnInit(): void {}
}
