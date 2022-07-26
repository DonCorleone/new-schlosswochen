import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeCH from '@angular/common/locales/de-CH';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'schlosswochen-ch';

  ngOnInit() {
    registerLocaleData(localeDeCH, 'de-CH');
  }
}
