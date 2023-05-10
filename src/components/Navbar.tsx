import React, { Fragment } from 'react';
import { Nav, Navbar, Container, Form, Row, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from 'routes/routes';
import 'styles/Navbar.scss';
import { useDarkMode } from 'usehooks-ts';

const MyNavbar = () =>{


	//Hooks
	const {t} = useTranslation();
	const { isDarkMode, toggle } = useDarkMode();


	return (
		<Navbar
			className="rounded mb-2 box-shadow pe-4"
			id="navbar"
			collapseOnSelect
			expand="md"
			variant={`${isDarkMode?'dark':'light'}`}
			data-testid="navbar"
		>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Offcanvas id="responsive-navbar-nav">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						{'Martin\'s Website'}
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Container as={Offcanvas.Body}>
					<Nav className="me-auto" defaultActiveKey="/">
						{routes.map((route)=>
							<Fragment key={`${route.path}`}>
								<Nav.Link 
									as={Link}
									to={route.path}
									eventKey={route.path}>
									{route.name.toUpperCase()}
								</Nav.Link>
							</Fragment>)}
					</Nav>
				</Container>
			</Navbar.Offcanvas>
			<Navbar.Text>
				<Form.Switch
					label={`${isDarkMode?'Dark':'Light'} Theme`}
					checked={isDarkMode}
					onChange={toggle}/>					
			</Navbar.Text>
		</Navbar>
	);
};

export default MyNavbar;