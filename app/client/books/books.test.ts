import { getBooks } from './index';

import booksData from '~/data/books';

// testing library test a promise

test('getBooks() resolves to correct data', () => {
	return getBooks().then(books => {
		expect(books).equal(booksData);
	});
});
