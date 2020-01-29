import React from 'react';

import styles from '../sass/MainNav.module.scss';
const MainNav = ({ color, mobileNav, menuOpen, toggleMenu }) => {
	if (mobileNav) {
		const closedStyles = { height: '0', visibility: 'hidden' };
		const openStyles = { height: '100vh', visibility: 'visible' };

		return (
			<nav
				className={styles.mobileNav}
				style={menuOpen ? openStyles : closedStyles}>
				<ul>
					<li>
						<a
							href='#home'
							className={styles.navlink}
							onClick={toggleMenu}>
							Home
						</a>
					</li>
					<li>
						<a
							href='#services'
							className={styles.navlink}
							onClick={toggleMenu}>
							Services
						</a>
					</li>
					<li>
						<a
							href='#projects'
							className={styles.navlink}
							onClick={toggleMenu}>
							Projects
						</a>
					</li>
					<li>
						<a
							href='#process'
							className={styles.navlink}
							onClick={toggleMenu}>
							Process
						</a>
					</li>
					<li>
						<a
							href='#contact'
							className={styles.navlink}
							onClick={toggleMenu}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		);
	}

	return (
		<nav className={styles.mainNav} style={{ color: color }}>
			<ul>
				<li>
					<a href='#home' className={styles.navlink}>
						Home
					</a>
				</li>
				<li>
					<a href='#services' className={styles.navlink}>
						Services
					</a>
				</li>
				<li>
					<a href='#projects' className={styles.navlink}>
						Projects
					</a>
				</li>
				<li>
					<a href='#process' className={styles.navlink}>
						Process
					</a>
				</li>
				<li>
					<a href='#contact' className={styles.navlink}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
