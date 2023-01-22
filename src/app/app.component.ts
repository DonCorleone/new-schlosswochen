import { Component, OnDestroy, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeCH from '@angular/common/locales/de-CH';
import { SeoService } from './services/seo.service';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<router-outlet><app-sidenav></app-sidenav></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'schlosswochen-ch';
  private _ngDestroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private seoService: SeoService
  ) {
    router.events
      .pipe(
        takeUntil(this._ngDestroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((x) => {
        this.seoService.setDescription(
          'Schlosswochen - das Ferienangebot in Luzern für Kinder ab 5 Jahren. Auf dem Tribschenhorn in Luzern. Während den Sommerferien. Kinderbetreuung und Stärkung.',
          (x as NavigationEnd).url
        );
        this.seoService.setTitle('Schlosswochen', (x as NavigationEnd).url);
      });
  }
  ngOnInit() {
    registerLocaleData(localeDeCH, 'de-CH');
  }
  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
