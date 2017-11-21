export interface ResultImage {
  with: number;
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
  artistis: Artist[];
}
