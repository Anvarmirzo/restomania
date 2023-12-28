import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const NotFound = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.wrapper}>
			<h1>{t('utils.not-found-page')}</h1>
		</div>
	);
};
