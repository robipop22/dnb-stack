import booksData from '~/data/books';

import type { Book } from '~/interfaces/books';

export const getBooks = (): Promise<Book[]> =>
	new Promise(resolve => {
		// delay by 1 second
		setTimeout(() => {
			resolve(booksData);
		}, 1000);
		// reject(new Error('Something went wrong'));
	});
