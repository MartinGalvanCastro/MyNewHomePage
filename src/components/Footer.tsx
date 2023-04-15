import React, {Fragment} from 'react';
import { useTranslation } from 'react-i18next';
import 'styles/Footer.scss';

const Footer = () => {
	const [t] = useTranslation();
	const content = t('footer.content').split('\n');

	return (
		<footer id="footer" className="mt-5">
			<h5>{t('footer.title')}</h5>
			<p>
				{content.map((line,_idx)=>(<Fragment key={`footer-line-${_idx}`}>{line}<br/></Fragment>))}
			</p>
		</footer>
	);
};

export default Footer;