import { use } from 'react';
import BooksScreen from '~/components/books';
import { type Book } from '~/interfaces/books';

interface BooksContentProps {
	booksPromise: Promise<Book[]>;
}

const BooksContent = ({ booksPromise }: BooksContentProps) => {
	const books = use(booksPromise);
	return <BooksScreen books={books} />;
};

export default BooksContent;
