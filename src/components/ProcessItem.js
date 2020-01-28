import React from 'react';

import Banner from './Banner';

import styles from '../sass/ProcessItem.module.scss';
const Process = ({ number, title, children, imgSrc, imgAlt }) => {
	return (
		<div className={styles.process}>
			<div className={styles.number}>{number}</div>
			<div className={styles.content}>
				<Banner>{title}</Banner>
				<p>{children}</p>
			</div>
			<img src={imgSrc} alt={imgAlt} className={styles.image} />
		</div>
	);
};

export default Process;
