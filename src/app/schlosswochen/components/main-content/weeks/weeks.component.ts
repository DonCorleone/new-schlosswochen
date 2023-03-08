import {Component, Input, OnInit} from '@angular/core';
import {Week} from "../../../../models/content";

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent {
  @Input() weeks: Week[] | undefined;
  @Input() hideToggle = false;
  @Input() showSwiper = false
  @Input() year = 0;
}
