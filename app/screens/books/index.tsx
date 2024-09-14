import type { FC, ReactElement } from 'react';

import BookCard from '~/components/BookCard';

import type { BookScreenProps } from './props';

const BooksScreen: FC<BookScreenProps> = ({ books }: BookScreenProps): ReactElement => {
	return (
		<div>
			<h1 className="mb-10 mt-5 text-center text-3xl font-bold">Welcome to my awesome book library!</h1>
			<div className="mx-auto flex w-4/5 flex-col items-center justify-center">
				{books.map(book => (
					<BookCard key={book.isbn} {...book} />
				))}
			</div>
		</div>
	);
};

export default BooksScreen;
