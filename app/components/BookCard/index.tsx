import type { ReactElement, FC } from 'react';

import type { Book } from '~/interfaces/books';

import { BOOK_CARD_TEST_IDS } from '~/constants/test/bookCard';

const BookCard: FC<Book> = ({
	title,
	shortDescription,
	longDescription,
	isbn,
	thumbnailUrl,
	authors,
}: Book): ReactElement => (
	<div
		data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_CONTAINER}-${isbn}`}
		id={isbn}
		className=" my-10 flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		<h2 data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_TITLE}-${isbn}`} className="mb-5 text-xl font-bold text-white">
			{title}
		</h2>
		{shortDescription && (
			<p data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_SHORT_DESCRIPTION}-${isbn}`} className="text-white">
				{shortDescription}
			</p>
		)}
		{longDescription && (
			<p data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_LONG_DESCRIPTION}-${isbn}`} className="text-white">
				{longDescription}
			</p>
		)}
		{thumbnailUrl && (
			<img
				className="my-5"
				data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_THUMBNAIL_URL}-${isbn}`}
				src={thumbnailUrl}
				alt={title}
			/>
		)}
		{authors.map(author => (
			<p key={author} data-testid={`${BOOK_CARD_TEST_IDS.BOOK_CARD_AUTHOR}-${isbn}`} className="text-sm text-white">
				{author}
			</p>
		))}
	</div>
);

export default BookCard;
