import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImagesService implements OnDestroy {
  httpOptions: { headers: HttpHeaders; };
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Basic ' +
          btoa(
            environment.API_KEY_IMAGE4IO + ':' + environment.API_SECRET_IMAGE4IO
          ),
      }),
    };
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  getAlbum(albumHash: String): Observable<Image4Response> {
    return this.http.get<Image4Response>(
      environment.API_URL_IMAGE4IO + `/listFolder?path=/${albumHash}/`,
      this.httpOptions
    );
  }

  downloadAll(): void {
    this.downloadImages('');
  }

  downloadImages(folder: string){
    this.http.get<Image4Response>(
      environment.API_URL_IMAGE4IO + `/listFolder?path=${folder ?? '/' }`,
      this.httpOptions
    ).subscribe( p => {
      p.folders.forEach(folder => {
        this.downloadImages(folder.path);
      });

      p.images.forEach (i => {
        this.download(i.url).subscribe(blob => {
          this.createFile(blob, i.imagePath);
        });
      })
    })
  }

  createFile(res: Blob, title: string){
    const a = document.createElement('a');
    a.href = URL.createObjectURL(res);
    a.download = title;
    document.body.appendChild(a);
    a.click();
  }

  download(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }
}


export interface Image {
  folder: string;
  orginalName: string;
  name: string;
  size: number;
  format: string;
  width: number;
  height: number;
  createdAt: Date;
  updatedAt: Date;
  imagePath: string;
  url: string;
}

export interface Folder {
  name: string;
  path: string;
  parent: string;
}


export interface Image4Response {
  folders: Folder[];
  images: Image[];
}
