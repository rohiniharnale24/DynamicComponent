import { Injectable, Type } from '@angular/core';
import { AddsComponent } from './shared/components/adds/adds.component';
import { HeroAddComponent } from './shared/components/hero-add/hero-add.component';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  constructor() {}
  getAds() {
    return [
      {
        component: AddsComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
      },
      {
        component: AddsComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
      },
      {
        component: HeroAddComponent,
        inputs: {
          headline: 'Hiring for several positions',
          body: 'Submit your resume today!',
        },
      },
      {
        component: HeroAddComponent,
        inputs: {
          headline: 'Openings in all departments',
          body: 'Apply today',
        },
      },
    ] as { component: Type<any>; inputs: Record<string, unknown> }[];
  }
}
