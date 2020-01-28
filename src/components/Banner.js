import React from 'react';

import styles from '../sass/Banner.module.scss';

const Banner = ({ children }) => {
	return (
		<div className={styles.banner}>
			<h4>{children}</h4>
		</div>
	);
};

export default Banner;
