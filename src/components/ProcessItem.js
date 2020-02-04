import React from 'react';
import Image from 'gatsby-image';

import Banner from './Banner';

import styles from '../sass/ProcessItem.module.scss';
const Process = ({ number, title, children, imgSrc, imgAlt }) => {
	return (
		<div className={styles.process}>
			<div className={styles.content}>
				<div className={styles.number}>{number}</div>
				<div className={styles.description}>
					<Banner>{title}</Banner>
					<p>{children}</p>
				</div>
			</div>

			<div className={styles.image}>
				<Image fluid={imgSrc} alt={imgAlt} />
			</div>
		</div>
	);
};

export default Process;
