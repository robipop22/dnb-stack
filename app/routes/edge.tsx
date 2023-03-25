import type { LoaderFunction } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';

import { getBooks } from '~/client/books';

import BooksScreen from '~/screens/books';

// edge route

export const config = { runtime: 'edge' };

export const meta = () => [
	{
		title: 'Remix DnB Stack | Books NodeJS',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const loader: LoaderFunction = async () => {
	// response is delayed by 1 second
	const books = await getBooks();

	return { books };
};

const BooksRoute = () => {
	const { books } = useLoaderData<typeof loader>();

	return (
		<>
			<a
				className="flex w-full justify-center pt-5 underline"
				href="https://vercel.com/docs/concepts/functions/edge-functions"
				target="_blank"
				rel="noreferrer">
				Read more about Vercel Edge Runtime here
			</a>
			<BooksScreen books={books} />
		</>
	);
};

export default BooksRoute;
