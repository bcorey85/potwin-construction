import React from 'react';

import styles from '../sass/main.module.scss';

const Main = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};

export default Main;
