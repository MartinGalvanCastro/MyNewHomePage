import React from 'react';
import { describe, it } from 'vitest';
import {render} from '@testing-library/react';
import Footer from 'components/Footer';

describe('<Footer/>',()=>{

	it('Should Render', () => {
		const {container} = render(<Footer />);
		expect(container.childNodes[0].childNodes).toHaveLength(2);
	});
});