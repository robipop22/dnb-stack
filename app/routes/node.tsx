import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getBooks } from '~/client/books';

import BooksScreen from '~/screens/books';

// nodejs route

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

	return json({ books });
};

const BooksRoute = () => {
	const { books } = useLoaderData<typeof loader>();

	return (
		<>
			<a
				className="flex w-full justify-center pt-5 underline"
				href="https://vercel.com/docs/concepts/functions/serverless-functions"
				target="_blank"
				rel="noreferrer">
				Read more about Vercel Serverless Functions here
			</a>
			<BooksScreen books={books} />
		</>
	);
};

export default BooksRoute;
