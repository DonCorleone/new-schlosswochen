import { Component } from '@angular/core';
import { Content } from '../../../models/content';
import { Observable } from 'rxjs';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
    `
      div div:last-child mat-divider {
        display: none;
      }
    `,
  ],
})
export class IndexComponent {
  content$: Observable<Content[]> = this.contentService.content;

  constructor(private contentService: ContentService) {}
}
