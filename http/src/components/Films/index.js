import React from 'react';
import uuid from 'uuid/v4';

const Films = ({ films }) => {
	return (
		<ul>
			{films.map(film => (<li key={uuid()} className="info-cell">Episode {film.episode_id}: {film.title}</li>))}
		</ul>
	);
};

export default Films;
