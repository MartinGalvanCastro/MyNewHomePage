import { describe, it, expect } from 'vitest';
import { BackgroundPropsUtil } from 'util/BackgroundProps';

describe('BackgroundPropsUtil',()=>{

	type backgroundPropType = {
		background:{
			color:{
				value:string
			},
		},
        particles:{
            color:{
                value:string
            },
            links:{
                color:string
            }
        }
	};
	it('Should return dark mode colors', () => {
		const result = BackgroundPropsUtil(true) as backgroundPropType;
		expect(result).toBeDefined();
		expect(result.background.color.value).toBe('#333333');
		expect(result.particles.color.value).toBe('#E9EDF0');
		expect(result.particles.links.color).toBe('#E9EDF0');
	});

	it('Should return light mode colors', () => {
		const result = BackgroundPropsUtil(false) as backgroundPropType;
		expect(result).toBeDefined();
		expect(result.background.color.value).toBe('#E9EDF0');
		expect(result.particles.color.value).toBe('#333333');
		expect(result.particles.links.color).toBe('#333333');
	});
});