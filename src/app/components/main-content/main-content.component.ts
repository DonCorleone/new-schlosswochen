import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { Content } from '../../models/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styles: [
    `
      markdown > p {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class MainContentComponent implements OnInit, OnDestroy {
  content: Content | undefined = undefined;
  _ngDestroy$: Subject<void> = new Subject();

  constructor(
    private router: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.router.params
      .pipe(
        map((p) => p['title']),
        takeUntil(this._ngDestroy$)
      )
      .subscribe((s) => {
        this.content = undefined;
        if (!s) {
          this.content = {
            title: '',
            text: '',
            _id: 'hello',
            sortorder: 0,
            active: true,
            gallery: '',
            markdown: '',
            cards: undefined,
          };
          return;
        }

        setTimeout(() => {
          this.contentService.content.subscribe((content) => {
            if (content.length == 0) return;
            setTimeout(() => {
              this.content = this.contentService.contentById(s);
              this.content?.cards?.forEach((c) => {
                c.impressions?.forEach((i) => {
                  console.log('year ' + i.year);

                  i.weeks.forEach((w) => {
                    console.log(
                      'week ' +
                        w.number +
                        ' : ' +
                        new Date(w.dateStart).toString() +
                        ' - ' +
                        new Date(w.dateEnd).toString()
                    );
                  });
                });
              });
            }, 200);
          });
        });
      });
  }

  ngOnDestroy(): void {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
