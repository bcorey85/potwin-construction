import React from 'react';

import styles from '../sass/SectionHeading.module.scss';

const SectionHeading = ({ title }) => {
	return <h2 className={styles.sectionHeading}>{title}</h2>;
};

export default SectionHeading;
