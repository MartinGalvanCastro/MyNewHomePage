import React, { FC, useRef, useEffect } from 'react';
import cv from 'assets/CV_Martin_Galvan.pdf';

const ResumeComponent:FC = ()=>{
	const iframeRef = useRef(null);

	useEffect(() => {
		iframeRef.current.setAttribute('src','../assets/CV_Martin_Galvan.pdf');
	}, []);
	
	return(
		<iframe ref={iframeRef} title="resume" width="100%"/>
	);
};

export default ResumeComponent;