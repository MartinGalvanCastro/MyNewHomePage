import React from 'react';
import { describe,it } from 'vitest';
import { screen, render } from '@testing-library/react';
import InfoCard from 'components/InfoCard';
import {SMRecord} from 'components/InfoCard';

describe('<InfoCard/>', ()=>{
	it('Should Render', () => {
		render(<InfoCard />);
		expect(screen.getByText('Martin Galvan')).toBeDefined();
	});

	it('Links should work', () => {
		const socialMedia = ['linkedin', 'github', 'whatsapp'];
		const { getByTestId } = render(<InfoCard />);
		socialMedia.forEach((link) => {
			const sm = SMRecord[link];
			const icon = getByTestId(`icon-${link}`);
			expect(icon).toBeInTheDocument();
		});
	});
});