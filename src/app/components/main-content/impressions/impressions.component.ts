import { Component, Input } from '@angular/core';
import { Card } from '../../../models/content';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
})
export class ImpressionsComponent {
  @Input() card: Card | undefined;
}
