import React from 'react';
import { describe,it,vi } from 'vitest';
import {render } from '@testing-library/react';
import MyNavbar from 'components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('<MyNavBar />', ()=>{

	it('Renders Properly', () => {
		// Mocking useTranslation and useDarkMode hooks
		vi.mock('react-i18next', () => ({
			useTranslation: () => ({ t: (key:unknown) => key }),
		}));
		vi.mock('usehooks-ts', () => ({
			useDarkMode: () => ({ isDarkMode: true, toggle: vi.fn() }),
		}));

		const { getByTestId } = render(<MyNavbar />, {wrapper:BrowserRouter});
		const navbar = getByTestId('navbar');

		expect(navbar).toHaveClass('rounded mb-2 box-shadow pe-4');
		expect(navbar).toHaveAttribute('id', 'navbar');
	});

});