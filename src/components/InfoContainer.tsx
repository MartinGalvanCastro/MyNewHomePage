import React, {Fragment} from 'react';
import { Container } from 'react-bootstrap';
import {
	Routes,
	Route
} from 'react-router-dom';
import { routes } from 'routes/routes';

const ContentContainer = () =>{
	return (
		<Container className="box-shadow mt-3 pt-3 pb-3">
			<Routes>
				{routes.map((route,index)=>
					<Fragment key={`route-${index}`}>
						<Route path={route.path} element={<route.component />}/>
					</Fragment>)}
			</Routes>
		</Container>
	);
};
export default ContentContainer;