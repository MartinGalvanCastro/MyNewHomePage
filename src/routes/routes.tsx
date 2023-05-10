import React from 'react';
import { routeModel } from 'model/RouteModel';
import AboutMeComponent from 'components/AboutMe';
import ExperienceComponent from 'components/Experience';
import SkillsComponent from 'components/Skills';
import ResumeComponent from 'components/Resume';
import ProjectsComponent from 'components/Projects';

export const routes: Array<routeModel> = [
	{
		path:'/',
		name:'Home',
		component: AboutMeComponent
	},
	{
		path:'/experience',
		name:'Experience',
		component: ExperienceComponent
	},
	{
		path:'/skills',
		name:'Skills',
		component:SkillsComponent
	},
	{
		path:'/projects',
		name:'Projects',
		component:ProjectsComponent
	},
	{
		path:'/resume',
		name:'Resume',
		component:ResumeComponent
	}
];