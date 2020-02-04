import React from 'react';
import Image from 'gatsby-image';
import icon from '../images/icon-right-arrow.svg';
import styles from '../sass/Card.module.scss';

const Card = ({ imgSrc, imgAlt, title, children, linkURL, linkText }) => {
	return (
		<div className={styles.card}>
			<Image fluid={imgSrc} alt={imgAlt} />
			<div className={styles.cardBody}>
				<h4>{title}</h4>
				<p>{children}</p>
				<a href={linkURL}>
					<div className={styles.cardLink}>
						{linkText}
						<object
							data={icon}
							type='image/svg+xml'
							className={styles.icon}
							aria-label='Arrow Icon'
						/>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Card;
