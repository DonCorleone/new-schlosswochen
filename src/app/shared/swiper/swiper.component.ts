import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, map, Observable, Subject, takeUntil } from 'rxjs';
import { SwiperOptions } from 'swiper';
import {
  Image as image4File,
  ImagesService,
} from '../../services/images.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
})
export class SwiperComponent implements OnInit, OnDestroy {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    lazy: true,
  };

  @Input() week: number = -1;
  @Input() year: number = -1;

  files$: Observable<image4File[]> = EMPTY;

  private _ngDestroy$ = new Subject<void>();
  private query: string = '';

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
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
            var match = query.match('\\(max-width:\\s(\\d+)\\.98px\\)');

            var width = match?.length ? match[1] : '2048';
            if (this.year && this.week) {
              this.files$ = this.imageService
                .getAlbum(`schlosswochen/sw-${this.year}-${this.week}`)
                ?.pipe(map((p) => {
                  p.images?.forEach( image => image.url = `https://images.weserv.nl/?url=${image.url}&w=${width}&fit=contain&cbg=black`);
                  return p.images;
                }));
            }
          }
        }
      });
    //  this.imageService.downloadAll();
  }
  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
