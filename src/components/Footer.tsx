import React, {Fragment, FC} from 'react';
import { useTranslation } from 'react-i18next';
import 'styles/Footer.scss';


/**
 * Function that returns website footer
 * @returns Footer component
 */
const Footer:FC = () => {

	//Hooks
	const [t] = useTranslation();

	//Prepare Data
	const content = t('footer.content').split('\n');

	return (
		<Fragment>
			<h5>{t('footer.title')}</h5>
			<p>
				{content.map((line,_idx)=>(<Fragment key={`footer-line-${_idx}`}>{line}<br/></Fragment>))}
			</p>
		</Fragment>
	);
};

export default Footer;