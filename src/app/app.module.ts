import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddsComponent } from './shared/components/adds/adds.component';
import { HeroAddComponent } from './shared/components/hero-add/hero-add.component';
import { FormComponent } from './shared/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsComponent,
    HeroAddComponent,
    FormComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
