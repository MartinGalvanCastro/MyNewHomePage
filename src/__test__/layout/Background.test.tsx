import { render } from '@testing-library/react';
import ParticleBackground from 'layout/Background';
import React from 'react';
import { describe, it } from 'vitest';
import {queryByAttribute } from '@testing-library/react';
export const getById = queryByAttribute.bind(null, 'id');


describe('<ParticleBackground />',()=>{
	it('Should render correclty with lightmode',() => {
		const {container} = render(<ParticleBackground isDarkMode={false}/>);
		const background = getById(container,'tsparticles');
		expect(background).toBeDefined();
		expect(background).toBeInTheDocument();
	});


	it('Should render correclty with darkmode',() => {
		const {container} = render(<ParticleBackground isDarkMode={true}/>);
		const background = getById(container,'tsparticles');
		expect(background).toBeDefined();
		expect(background).toBeInTheDocument();
	});
});

