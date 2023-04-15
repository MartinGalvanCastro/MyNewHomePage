import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import * as bootstrap from 'bootstrap';
import Layout from 'layout/Layout';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Layout />
		</I18nextProvider>
	</React.StrictMode>,
);
