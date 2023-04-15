import React from 'react';
import { describe, it, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Layout from 'layout/Layout';
import { useDarkMode } from 'usehooks-ts';
import {queryByAttribute } from '@testing-library/react';
export const getByClass = queryByAttribute.bind(null, 'class');
describe('<Layout />',()=>{

	beforeEach(()=>{
		vi.mock('usehooks-ts');
	});

	it('Should render light mode', () => {
		vi.mocked(useDarkMode).mockReturnValue({
			isDarkMode:false,
			toggle:vi.fn(),
			enable: vi.fn(),
			disable: vi.fn(),

		});
		const {container} = render(<Layout />);
		const ligthModeContainer = getByClass(container,'light-theme');
		expect(ligthModeContainer).toBeDefined();
	});


	it('Should render dark mode', () => {
		vi.mocked(useDarkMode).mockReturnValue({
			isDarkMode:true,
			toggle:vi.fn(),
			enable: vi.fn(),
			disable: vi.fn(),

		});
		const {container} = render(<Layout />);
		const ligthModeContainer = getByClass(container,'dark-theme');
		expect(ligthModeContainer).toBeDefined();
	});
});