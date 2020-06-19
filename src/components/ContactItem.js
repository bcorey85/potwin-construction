import React from 'react';

import styles from '../sass/ContactItem.module.scss';

const ContactItem = ({ label, item, href }) => {
	if (href) {
		return (
			<p className={styles.item}>
				<p>{label}</p>
				<a href={href}>{item}</a>
			</p>
		);
	}

	return (
		<p className={styles.item}>
			<p>{label}</p>
			{item}
		</p>
	);
};

export default ContactItem;
