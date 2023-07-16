import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SwiperComponent],
  imports: [CommonModule, NgxUsefulSwiperModule, MatButtonModule, MatIconModule],
  exports: [SwiperComponent],
})
export class SwiperModule {}
