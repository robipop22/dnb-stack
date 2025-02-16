import { use } from 'react';
import { type Book } from '~/interfaces/books';
import BooksScreen from '~/screens/books';

interface BooksContentProps {
	booksPromise: Promise<Book[]>;
}

const BooksContent = ({ booksPromise }: BooksContentProps) => {
	const books = use(booksPromise);
	return <BooksScreen books={books} />;
};

export default BooksContent;
