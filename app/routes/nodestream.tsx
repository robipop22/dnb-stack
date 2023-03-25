import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { defer } from '@vercel/remix';

import type { LoaderFunction } from '@remix-run/node';

import { getBooks } from '~/client/books';

import BooksScreen from '~/screens/books';

// nodejs route with streaming response, check line 30

export const meta = () => [
	{
		title: 'Remix DnB Stack | Books NodeJS Streaming',
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

	return defer({
		// notice here how we don't use the await keyword, if we use that then Remix will wait for the promise to resolve
		books: getBooks(),
	});
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
			<Suspense fallback={<h1 className="mb-10 mt-5 text-center text-3xl font-bold">Loading books ...</h1>}>
				<Await resolve={books}>{books => <BooksScreen books={books} />}</Await>
			</Suspense>
		</>
	);
};

export default BooksRoute;
