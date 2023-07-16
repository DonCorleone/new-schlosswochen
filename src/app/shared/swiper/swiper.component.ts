import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, map, Observable, Subject, takeUntil } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { ImagesService, Netlifile } from '../../services/images.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from '../../../environments/environment';
import { AutoplayOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
})
export class SwiperComponent implements OnInit, OnDestroy {
  @Input() week: number = -1;
  @Input() year: number = -1;
  @Input() autoplay: AutoplayOptions | undefined;

  config: SwiperOptions = {};

  files$: Observable<Netlifile[]> = EMPTY;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.config = {
      autoplay: this.autoplay ?? false,
      pagination: this.autoplay
        ? false
        : {
            el: '.swiper-pagination',
            type: 'bullets',
          },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 30,
      lazy: true,
      zoom: true,
    };
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const match = query.match('\\(max-width:\\s(\\d+)\\.98px\\)');
            const width = match?.length ? match[1] : '2048';

            this.files$ = this.imageService
              .listAssets(`/assets/images/${this.year}-${this.week}`)
              .pipe(
                map((p) => {
                  p.forEach(
                    (image) =>
                      (image.path = `${environment.URL}${image.path}?nf_resize=fit&w=${width}`)
                  );
                  return p;
                })
              );
            break;
          }
        }
      });
  }

  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
