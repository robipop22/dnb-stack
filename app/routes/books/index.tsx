import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getBooks } from '~/client/books';

import BooksScreen from '~/screens/books';

export const loader: LoaderFunction = async () => {
	const books = await getBooks();

	return json({ books });
};

const BooksRoute = () => {
	const { books } = useLoaderData();

	return <BooksScreen books={books} />;
};

export default BooksRoute;
