import {Component, OnInit} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeCH from '@angular/common/locales/de-CH';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'new-schlosswochen-ch';

  ngOnInit() {
    registerLocaleData(localeDeCH, 'de-CH');
  }
}
