import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { ROUTES_CONFIG } from 'shared/config';
import { Loadable } from 'shared/ui';
import { NotFound } from 'widgets/not-found';

const HomePage = Loadable(lazy(() => import('pages/home')));

export const rootChildrenRoute: RouteObject[] = [
	{
		path: ROUTES_CONFIG.home,
		element: <HomePage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
];
