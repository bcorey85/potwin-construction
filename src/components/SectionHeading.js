import React from 'react';

import styles from '../sass/SectionHeading.module.scss';

const SectionHeading = ({ title }) => {
	return <h3 className={styles.sectionHeading}>{title}</h3>;
};

export default SectionHeading;
