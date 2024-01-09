//BookTypes.ts
export interface BookInput {
  author: string;
  title: string;
  year: number | null | undefined;
  userId: string;
}

export interface Book {
  _id: any;
  author: string;
  title: string;
  year: number | null;
}