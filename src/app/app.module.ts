import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwiperModule } from './shared/swiper/swiper.module';
import { DateAdapter } from '@angular/material/core';
import { CustomDateAdapter } from './schlosswochen/components/main-content/readonly-datepicker/custom-date-adapter';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {GoogleMapsModule} from "@angular/google-maps";

const routes: Routes = [
  {
    path: 'schlosswochen',
    loadChildren: () =>
      import('./schlosswochen/schlosswochen.module').then(
        (m) => m.SchlosswochenModule
      ),
  },
  { path: '**', redirectTo: 'schlosswochen' },
];

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.paragraph = (text: string) => {
    return '<p class="color-red">' + text + '</p>';
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    ScullyLibModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
