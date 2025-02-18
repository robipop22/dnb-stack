import { useLoaderData } from 'react-router';

import { getBooks } from '~/client/books';

import BooksScreen from '~/components/books';

export const meta = () => [
	{
		title: 'React Router DnB Stack | Books Edge',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const headers = () => {
	return {
		'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
	};
};

export const loader = async () => {
	// response is delayed by 1 second
	const books = await getBooks();

	return { books };
};

const BooksRoute = () => {
	const { books } = useLoaderData<typeof loader>();

	return (
		<main>
			<a
				className="flex w-full justify-center pt-5 underline"
				href="https://vercel.com/docs/concepts/functions/edge-functions"
				target="_blank"
				rel="noreferrer"
			>
				Read more about Vercel Edge Runtime here
			</a>
			<BooksScreen books={books} />
		</main>
	);
};

export default BooksRoute;
