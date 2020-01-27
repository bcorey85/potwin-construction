import React from 'react';
import styles from '../sass/header.module.scss';
import logo from '../images/potwin-construction-logo-main.svg';
import MainNav from './MainNav';

const Header = () => {
	return (
		<header className={styles.header}>
			<img
				src={logo}
				alt='Potwin Construction logo'
				className={styles.logo}
			/>
			<MainNav />
		</header>
	);
};

export default Header;
