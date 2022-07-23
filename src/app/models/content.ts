export class Content {
  _id: string = "";
  sortorder: number = -1;
  active: boolean = true;
  title: string = "";
  text: string = "";
  markdown: string = "";
  gallery: string = "";
  cards: Card[] | undefined;
}
export interface Card {
  index: boolean;
  map: boolean;
  imageUrl: string;
  title: string;
  markdown: string;
  impressions: Impression[] | undefined;
}
export interface Week {
  number: number;
  dateStart: Date;
  dateEnd: Date;
}

export interface Impression {
  year: number;
  weeks: Week[];
}
