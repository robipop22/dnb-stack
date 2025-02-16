import { useLoaderData } from 'react-router';
import { Suspense } from 'react';

import { getBooks } from '~/client/books';
import BooksContent from '~/components/BooksContent';

// nodejs route with streaming response using React 19's use API

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

export const loader = async () => {
	// Return the promise directly without awaiting
	// This allows React to handle the streaming with Suspense
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
				href="https://vercel.com/docs/concepts/functions/serverless-functions"
				target="_blank"
				rel="noreferrer"
			>
				Read more about Vercel Serverless Functions
			</a>
			<Suspense fallback={<h1 className="mb-10 mt-5 text-center text-3xl font-bold">Loading books ...</h1>}>
				<BooksContent booksPromise={books} />
			</Suspense>
		</main>
	);
};

export default BooksRoute;
