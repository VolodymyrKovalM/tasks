import React from 'react';

import './styles.scss';

const Preloader = ({ className }) => {
	return (
		<div className={className}>
			<div className="preloader">
				<div className="preloader-bar"></div>
			</div>
		</div>
	);
}

export default Preloader;
