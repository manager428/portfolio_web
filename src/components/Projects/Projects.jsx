import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import { web, blockchain, mobile } from './Projects.constants';
import { projectsAnim } from './Projects.anim';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Projects({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='WEB DEV' data={web} />
			<ProjectsSlider category='BlockChain DEV' data={blockchain} />
			<ProjectsSlider category='Mobile DEV' data={mobile} />
		</motion.section>
	);
}
