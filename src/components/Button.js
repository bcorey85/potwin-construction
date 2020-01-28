import React from 'react';

import styles from '../sass/Button.module.scss';

const Button = ({ element, children, href, type }) => {
	if (element === 'button') {
		return <button className={styles[type]}>{children}</button>;
	}

	return (
		<a href={href} className={styles[type]}>
			{children}
		</a>
	);
};

export default Button;
