import type { ReactElement, FC } from 'react';

import BookCard from '~/components/BookCard';

import type { BookScreenProps } from './props';

const BooksScreen: FC<BookScreenProps> = ({ books }: BookScreenProps): ReactElement => {
	return (
		<div>
			<h1 className=" text-center text-3xl font-bold mb-10 mt-5">Welcome to my awesome book library!</h1>
			<div className="flex justify-center items-center w-4/5 flex-col mx-auto">
				{books.map(book => (
					<BookCard key={book.isbn} {...book} />
				))}
			</div>
		</div>
	);
};

export default BooksScreen;
