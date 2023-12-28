import { ElementType, Suspense } from 'react';
import styles from './styles.module.scss';

export const Loadable = (Component: ElementType) => {
	return function fn(props: object) {
		return (
			<Suspense
				fallback={
					<div className={styles.loadable}>
						{/*<CircularProgress />*/}
						Loading...
					</div>
				}
			>
				<Component {...props} />
			</Suspense>
		);
	};
};
