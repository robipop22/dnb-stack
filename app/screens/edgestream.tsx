import { useLoaderData } from 'react-router';
import { Suspense } from 'react';

import { getBooks } from '~/client/books';
import BooksContent from '~/components/BooksContent';

// edge route with streaming response using React 19's use API

export const config = { runtime: 'edge' };

export const meta = () => [
	{
		title: 'Remix DnB Stack | Books Edge Streaming',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const loader = async () => {
	// response is delayed by 1 second
	return {
		books: getBooks(),
	};
};

const BooksRoute = () => {
	const { books } = useLoaderData<typeof loader>();

	return (
		<main>
			<a
				className="flex w-full justify-center pt-5 underline"
				href="https://vercel.com/docs/concepts/edge-functions/edge-functions-api"
				target="_blank"
				rel="noreferrer"
			>
				Read more about Vercel Edge Functions
			</a>
			<Suspense fallback={<h1 className="mb-10 mt-5 text-center text-3xl font-bold">Loading books ...</h1>}>
				<BooksContent booksPromise={books} />
			</Suspense>
		</main>
	);
};

export default BooksRoute;
