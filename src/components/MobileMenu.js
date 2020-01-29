import React, { useState } from 'react';

import styles from '../sass/MobileMenu.module.scss';

import MainNav from './MainNav';

const MobileMenu = () => {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<React.Fragment>
			<div className={styles.icon} onClick={toggleMenu}>
				<span />
				<span />
				<span />
			</div>
			<MainNav
				mobileNav={true}
				menuOpen={menuOpen}
				toggleMenu={toggleMenu}
			/>
		</React.Fragment>
	);
};

export default MobileMenu;
