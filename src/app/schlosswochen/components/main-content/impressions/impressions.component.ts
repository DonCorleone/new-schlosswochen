import {Component, Input} from '@angular/core';
import {Impression} from "../../../../models/content";

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
})
export class ImpressionsComponent {

  @Input() impressions: Impression[] | undefined;
}
