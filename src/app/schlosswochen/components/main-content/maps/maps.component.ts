import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../models/content';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  @Input() card: Card | undefined;
  zoom = 15;
  center: google.maps.LatLngLiteral = new (class
    implements google.maps.LatLngLiteral
  {
    lat = 47.0417285;
    lng = 8.3260751;
  })();
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };

  markers: any[] = [];

  ngOnInit(): void {
/*    this.markers.push({
      position: {
        lat: 47.0417285,
        lng: 8.3260751,
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.DROP },
    });*/
  }
  zoomIn() {
    if (!this.options || !this.options.maxZoom) {
      return;
    }
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (!this.options || !this.options.minZoom) {
      return;
    }
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
}
