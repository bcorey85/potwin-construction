import React from 'react';

import styles from '../sass/Banner.module.scss';

const Banner = ({ children }) => {
	return <h4 className={styles.banner}>{children}</h4>;
};

export default Banner;
