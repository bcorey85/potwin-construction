import React from 'react';

import styles from '../sass/ContactItem.module.scss';

const ContactItem = ({ label, item }) => {
	return (
		<p className={styles.item}>
			<strong>{label}:</strong>
			{item}
		</p>
	);
};

export default ContactItem;
