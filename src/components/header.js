import React from 'react';
import styles from '../sass/Header.module.scss';
import logo from '../images/potwin-construction-logo-main.svg';
import MainNav from './MainNav';

const Header = () => {
	return (
		<header className={styles.header}>
			<a href='/'>
				<img
					src={logo}
					alt='Potwin Construction logo'
					className={styles.logo}
				/>
			</a>
			<MainNav />
		</header>
	);
};

export default Header;
