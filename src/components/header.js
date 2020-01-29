import React from 'react';

import MainNav from './MainNav';
import MobileMenu from './MobileMenu';

import styles from '../sass/Header.module.scss';
import logo from '../images/potwin-construction-logo-main.svg';

const Header = () => {
	return (
		<header className={styles.header}>
			<a href='/' className={styles.logoLink}>
				<img
					src={logo}
					alt='Potwin Construction logo'
					className={styles.logo}
				/>
			</a>
			<div className={styles.nav}>
				<MainNav />
			</div>
			<div className={styles.mobileNav}>
				<MobileMenu />
			</div>
		</header>
	);
};

export default Header;
