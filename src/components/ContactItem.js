import React from 'react';

import styles from '../sass/ContactItem.module.scss';

const ContactItem = ({ label, item }) => {
	return (
		<p className={styles.item}>
			<h4>{label}</h4>
			{item}
		</p>
	);
};

export default ContactItem;
