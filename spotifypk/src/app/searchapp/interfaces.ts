export interface ResultImage {
  width: number;
  height: number;
  url: string;
}

export interface Entity {
  id: string;
  name: string;
}

export interface Artist extends Entity { }

export interface Album extends Entity {
  images: ResultImage[];
  artists: Artist[];
}
