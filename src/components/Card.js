import React from 'react';

import 'boxicons';

import styles from '../sass/Card.module.scss';

const Card = ({ imgSrc, imgAlt, title, children, linkURL, linkText }) => {
	return (
		<div className={styles.card}>
			<img src={imgSrc} alt={imgAlt} />
			<div className={styles.cardBody}>
				<h4>{title}</h4>
				<p>{children}</p>
				<a href={linkURL}>
					<div className={styles.cardLink}>
						{linkText}
						<box-icon name='right-arrow-alt' />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Card;
