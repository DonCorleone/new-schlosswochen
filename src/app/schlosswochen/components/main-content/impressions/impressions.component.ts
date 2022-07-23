import {Component, Input, OnInit} from '@angular/core';
import {Card, Impression} from "../../../../models/content";

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
})
export class ImpressionsComponent implements OnInit{

//  @Input() impressions: Impression[] | undefined;
  @Input() card: Card | undefined;

  ngOnInit(): void {
    console.log(JSON.stringify(this.card));
  }
}
