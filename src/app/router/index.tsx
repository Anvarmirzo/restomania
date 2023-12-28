import { createBrowserRouter } from 'react-router-dom';
import { rootChildrenRoute } from 'app/router/routes';
import { RootLayout } from 'widgets/root-layout';

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		path: '',
		children: rootChildrenRoute.map((route) => route),
	},
]);
