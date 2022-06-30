import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule, NgxUsefulSwiperModule],
  exports: [SwiperComponent],
})
export class SwiperModule {}
