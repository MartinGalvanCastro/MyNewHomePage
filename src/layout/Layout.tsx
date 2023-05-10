import React, {FC, Suspense} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ParticleBackground from './Background';
import { useDarkMode } from 'usehooks-ts';
import 'styles/Layout.scss';
import InfoCard from 'components/InfoCard';
import Navbar from 'components/Navbar';
import ContentContainer from 'components/InfoContainer';
import Footer from 'components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

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
			<Suspense fallback={'Loading'}>
				<Container>
					<Row className="d-flex flex-row justify-content-start align-items-start">
						<Col id="my-info" lg={3} md={4} className="mx-auto d-none d-md-block">
							<Container className="mb-sm-2 data-container box-shadow pt-2 ps-1 pe-1 ps-sm-2 pe-sm-2">
								<InfoCard/>
							</Container>
						</Col>
						<Col id="content">
							<Router>
								<Row id="nav">
									<Navbar/>
								</Row>
								<Row id="main-content">
									<ContentContainer/>
								</Row>
							</Router>
						</Col>
					</Row>
					<footer id="footer" className="mt-5 d-none d-md-block">
						<Footer/>
					</footer>
				</Container>
			</Suspense>
			<ParticleBackground isDarkMode={isDarkMode}/>
		</div>
		
	);
};

export default Layout;