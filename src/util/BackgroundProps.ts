import { ISourceOptions } from 'tsparticles-engine';

/**
 * Function that renders dark or light mode for particle background
 * @param isDarkMode. False if is it light mode, true otherwise
 * @returns Config props
 */
export const BackgroundPropsUtil = (isDarkMode:boolean):ISourceOptions =>{
	return {
		background: {
			color: {
				value: isDarkMode?'#333333':'#E9EDF0',
			},
		},
		fpsLimit: 60,
		interactivity: {
			detectsOn: 'canvas',
			events: {
				resize: true,
			},
		},
		particles: {
			color: {
				value: isDarkMode?'#E9EDF0':'#333333',
			},
			links: {
				color: isDarkMode?'#E9EDF0':'#333333',
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1,
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 1,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					area: 2000,
				},
				value: 100,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: 'circle',
			},
			size: {
				random: true,
				value: 3,
			},
		},
		detectRetina: true,
	};
};