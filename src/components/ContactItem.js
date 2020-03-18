import React from 'react';

import styles from '../sass/ContactItem.module.scss';

const ContactItem = ({ label, item, href }) => {
	if (href) {
		return (
			<p className={styles.item}>
				<label>{label}: </label> <a href={href}>{item}</a>
			</p>
		);
	}

	return (
		<p className={styles.item}>
			<label>{label}: </label> {item}
		</p>
	);
};

export default ContactItem;
