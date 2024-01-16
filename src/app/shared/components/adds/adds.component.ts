import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrls: ['./adds.component.scss'],
})
export class AddsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() name!: string;
  @Input() bio!: string;
}
