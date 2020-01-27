import React from 'react';
import { Link } from 'gatsby';

import styles from '../sass/mainnav.module.scss';
const MainNav = ({ color }) => {
	return (
		<nav className={styles.mainnav} style={{ color: color }}>
			<ul>
				<li>
					<Link to='#home' className={styles.navlink}>
						Home
					</Link>
				</li>
				<li>
					<Link to='#services' className={styles.navlink}>
						Services
					</Link>
				</li>
				<li>
					<Link to='#projects' className={styles.navlink}>
						Projects
					</Link>
				</li>
				<li>
					<Link to='#process' className={styles.navlink}>
						Process
					</Link>
				</li>
				<li>
					<Link to='#contact' className={styles.navlink}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
