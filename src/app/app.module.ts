import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { SwiperModule } from './shared/swiper/swiper.module';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ImpressionsComponent } from './components/main-content/impressions/impressions.component';
import { MapsComponent } from './components/main-content/maps/maps.component';
import { IndexComponent } from './components/main-content/index/index.component';
import { ReadonlyDatepickerComponent } from './components/main-content/readonly-datepicker/readonly-datepicker.component';
import { WelcomeComponent } from './components/main-content/welcome/welcome.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/main-content/card/card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ContentService } from './services/content.service';
import { MatIconRegistry } from '@angular/material/icon';
import { CustomDateAdapter } from './components/main-content/readonly-datepicker/custom-date-adapter';
import { ScullyLibModule } from '@scullyio/ng-lib';

const routes: Routes = [
  {
    path: ':title',
    component: MainContentComponent,
  },
  {
    path: '',
    component: MainContentComponent,
  },
  { path: '**', redirectTo: '/' },
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
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    ImpressionsComponent,
    ReadonlyDatepickerComponent,
    CardComponent,
    MapsComponent,
    IndexComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild(),
    SwiperModule,
    GoogleMapsModule,
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
    HttpClientJsonpModule,
    ScullyLibModule,
  ],
  providers: [
    ContentService,
    MatIconRegistry,
    { provide: MAT_DATE_LOCALE, useValue: 'de-CH' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
