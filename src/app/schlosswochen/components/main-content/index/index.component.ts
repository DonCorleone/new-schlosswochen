import {Component, OnInit} from '@angular/core';
import { Content } from '../../../../models/content';
import { Observable } from 'rxjs';
import { ContentService } from '../../../../services/content.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit{
  content$: Observable<Content[]> = this.contentService.content;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.contentService.loadAll();
  }
}
