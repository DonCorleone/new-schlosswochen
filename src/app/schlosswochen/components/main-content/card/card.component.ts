import { Component, Input } from '@angular/core';
import { Card } from '../../../../models/content';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      img[mat-card-image] {
        max-width: unset;
      }
    `,
  ],
})
export class CardComponent {
  @Input() card: Card | undefined;
}
