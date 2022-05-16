export type Book = {
  isbn: string;
  title: string;
  pageCount: number;
  thumbnailUrl?: string;
  status: string;
  authors: string[];
  categories: string[];
  shortDescription?: string;
  longDescription?: string;
  publishedDate?: PublishedDate;
};

export type PublishedDate = {
  $date: string;
};
