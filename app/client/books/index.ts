import booksData from '~/data/books';

import type { Book } from '~/interfaces/books';

export const getBooks = (): Promise<Book[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(booksData);
      // reject(new Error('Something went wrong'));
    }, 1000);
  });
