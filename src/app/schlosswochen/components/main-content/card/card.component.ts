import { Component, Input } from '@angular/core';
import { Card, Content } from '../../../../models/content';
import {EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: Card | undefined;
}
