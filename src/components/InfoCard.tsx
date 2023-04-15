import React from 'react';
import porfilePic from '../assets/perfil.jpg';
import {Col,Row, Container} from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import 'styles/InfoCard.scss';
import { useTranslation } from 'react-i18next';
const socialMedia = ['linkedin', 'email', 'whatsapp'];

/**
 * Social Media Link Interface
 */
interface SMLink{
	url:string,
	logo:JSX.Element
}

/**
 * Social Media Link Record
 */
export const SMRecord : Record<string,SMLink> = {
	linkedin: {
		url: 'https://www.linkedin.com/in/martin-david-galvan-castro-0809a0201/',
		logo: <FaLinkedinIn />,
	},
	email: {
		url: 'mailto:martin2galvan@hotmail.com?cc=md.glavan@uniandes.edu.co',
		logo: <FaEnvelope />,
	},
	whatsapp: {
		url: 'https://wa.me/573057066739',
		logo: <FaWhatsapp />,
	},
	github: {
		url: 'https://github.com/MartinGalvanCastro',
		logo: <FaGithub />,
	},
};

/**
 * Component that renders the info card
 * @returns 
 */
const InfoCard = () =>{

	//i18n hook
	const { t } = useTranslation();


	const _renderPorfilePic = ()=>
		(
			<Row className="img-container">
				<img
					className="img-fluid rounded"
					src={porfilePic}
					alt="porfile_pic"
					id="porfile_pic"
					loading="lazy"
				/>
			</Row>
		);

	const _renderInfoContainer = ()=>
		(
			<>
				<Row className="name">
					<h3>Martin Galvan</h3>
					<span>Full Stack Developer</span>
				</Row>
				<hr/>
				<Row>
					<Row className="d-flex justify-content-center">
						<p>{t('info.contact')}</p>
						<Row className="mb-3">
							{socialMedia.map((link: string) => {
								const sm = SMRecord[link];
								return(
									<Col className="icon text-center" key={link}>
										<a href={sm.url} data-testid={`icon-${link}`}>{sm.logo}</a>
									</Col>);
							})}
						</Row>
						<p>{t('info.github')}</p>
						<Row className="mb-4">
							<Col className="icon text-center"><a href={SMRecord['github'].url} data-testid={'icon-github'}>{SMRecord['github'].logo}</a>
							</Col>
						</Row>
					</Row>
				</Row>
			</>
		);

	return (
		<Container className="mb-sm-2 data-container">
			{_renderPorfilePic()}
			<Container>
				{_renderInfoContainer()}	
			</Container>
		</Container>
	);
};

export default InfoCard;