import React from 'react';

import styles from '../sass/MainNav.module.scss';
const MainNav = ({ color }) => {
	return (
		<nav className={styles.mainnav} style={{ color: color }}>
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
