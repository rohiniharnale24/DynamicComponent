import { Component, OnInit, inject } from '@angular/core';
import { AdService } from 'src/app/ad.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'DynamicComponent';
  private adList = inject(AdService).getAds();
  private currentAdIndex = 0;
  get currentAd() {
    return this.adList[this.currentAdIndex];
  }
  displayNextAd() {
    this.currentAdIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }
}
