import React from 'react';
import Image from 'gatsby-image';

import styles from '../sass/ProcessItem.module.scss';
const Process = ({ number, title, children, imgSrc, imgAlt }) => {
	return (
		<section className={styles.process}>
			<div className={styles.content}>
				<div className={styles.description}>
					<div className={styles.number}>{number}</div>
					<h3>{title}</h3>
					<p>{children}</p>
				</div>
			</div>
			<div className={styles.image}>
				<Image fluid={imgSrc} alt={imgAlt} />
			</div>
		</section>
	);
};

export default Process;
