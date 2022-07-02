export class Content {
  _id: string = "";
  sortorder: number = -1;
  active: boolean = true;
  title: string = "";
  text: string = "";
  markdown: string = "";
  gallery: string = "";
  impressions: Impression[] | undefined;
  cards: Card[] | undefined;
}
export interface Card {
  title: string;
  markdown: string;
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
