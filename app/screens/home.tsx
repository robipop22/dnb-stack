import { Link } from 'react-router';

export const meta = () => [
	{
		title: 'React Router DnB Stack',
	},
	{
		charset: 'utf-8',
	},
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0',
	},
];

const Index = () => (
	<div className="flex h-screen w-screen flex-col items-center justify-start pt-20 text-center">
		<h1 className="pb-10 text-7xl">React Router DnB Stack</h1>
		<h2>This Stack contains a starter template for developing React Router Apps in vercel.</h2>
		<h2 className="pb-10 pt-10">
			In the the following routes you will find an example of a loader. This stack works great with both your own api's
			or a separate 3rd api.
		</h2>
		<Link className="underline" to="/edgestream">
			Vercel Edge Route with Streaming
		</Link>
		<Link className="underline" to="/edge">
			Vercel Edge Route
		</Link>
		<Link className="underline" to="/node">
			NodeJS Route
		</Link>
		<Link className="underline" to="/nodestream">
			NodeJS Streaming Route
		</Link>
		<h2 className="pt-10" data-cy="test">
			The biome config is opinionated and the structure of the project as well, feel free to change those.
		</h2>
	</div>
);

export default Index;
