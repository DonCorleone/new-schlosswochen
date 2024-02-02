export class Content {
  _id: string = "";
  sortorder: number = -1;
  active: boolean = true;
  title: string = "";
  text: string = "";
  description: string = "";
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
  description: string;
  impressions: Impression[] | undefined;
}
export interface Week {
  number: number;
  dateStart: Date;
  dateEnd: Date;
}

export interface file {
  name: string;
  displayName: string;
}

export interface Impression {
  files: file[];
  year: number;
  weeks: Week[];
}
