import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, take } from 'rxjs';
import { Content } from '../models/content';

@Injectable()
export class ContentService {
  private _content: BehaviorSubject<Content[]>;

  private dataStore: {
    content: Content[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { content: [] };
    this._content = new BehaviorSubject<Content[]>([]);
  }

  get content(): Observable<Content[]> {
    return this._content.asObservable();
  }

  contentById(id: string): Content | undefined {
    return this.dataStore.content.find((x) => x._id == id);
  }

  loadAll() {
    const contentUrl =
      'https://data.mongodb-api.com/app/schlosswochen-ch-tfxqz/endpoint/content';

    this.http
      .post(contentUrl, {})
      .pipe(
        take(1),
        map((data) => {
          // @ts-ignore
          this.dataStore.content = data;
          this._content.next(Object.assign({}, this.dataStore).content);
        }),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      )
      .subscribe();
  }
}
