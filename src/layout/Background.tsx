import React, { FC, useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { BackgroundPropsUtil } from '../util/BackgroundProps';
import 'styles/ParticleBackground.scss';
import type { Engine } from 'tsparticles-engine';


/**
 * Props for ParticleBackground Component
 */
interface Props{
	isDarkMode:boolean
}

/**
 * TS Particle background component
 * @returns <Particles/> component
 */
const ParticleBackground:FC<Props> = ({isDarkMode}:Props) => {

	const [config,setConfig]=useState(BackgroundPropsUtil(isDarkMode));

	useEffect(()=>{
		setConfig(BackgroundPropsUtil(isDarkMode));
	},[isDarkMode]);

	//Callback needed for TS Particles
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, [isDarkMode]);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={config}
		/>
	);
};

export default ParticleBackground;