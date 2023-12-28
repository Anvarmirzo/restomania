import { Outlet } from 'react-router-dom';
import { Header } from 'features/header';
import { Sidebar } from 'features/sidebar';

export const RootLayout = () => {
	return (
		<>
			<Sidebar />
			<div className="lg:pl-72">
				<Header />
				<main className="py-10">
					<div className="px-4 sm:px-6 lg:px-8">
						<Outlet />
					</div>
				</main>
			</div>
		</>
	);
};
