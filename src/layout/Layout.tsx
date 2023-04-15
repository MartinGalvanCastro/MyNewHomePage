import React, {FC} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ParticleBackground from './Background';
import { useDarkMode } from 'usehooks-ts';
import 'styles/Layout.scss';
import InfoCard from 'components/InfoCard';
import Navbar from 'components/Navbar';
import ContentContainer from 'components/ContentContainer';
import Footer from 'components/Footer';

/**
 * Layout Component
 * This component controls the dark mode theme in css and how other 
 * componets are distributed 
 * @returns <Layout/>
 */
const Layout:FC = () =>{
	//Dark Mode Hook
	const { isDarkMode } = useDarkMode();
	return(
		<div className={(isDarkMode?'dark-theme':'light-theme')+' main-container App mx-center pt-0 pb-0 pl-0 pr-0'}>
			<ParticleBackground isDarkMode={isDarkMode}/>
			<Container>
				<Row>
					<Col id="my-info" lg={3} md={4} className="mx-auto">
						<InfoCard/>
					</Col>
					<Col id="content">
						<Row id="nav">
							<Navbar/>
						</Row>
						<Row id="main-content">
							<ContentContainer/>
						</Row>
					</Col>
				</Row>
				<Footer/>
			</Container>
		</div>
	);
};

export default Layout;