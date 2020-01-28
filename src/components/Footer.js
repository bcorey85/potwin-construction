import React from 'react';

import MainNav from './MainNav';

import styles from '../sass/Footer.module.scss';
import logo from '../images/potwin-construction-logo-white.svg';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div>
					<img
						src={logo}
						alt='Potwin Construction logo'
						className={styles.logo}
					/>
					<div className={styles.contact}>
						<p>999-999-9999</p>
						<p>email@email.com</p>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.nav}>
						<MainNav color='white' />
					</div>

					<div className={styles.sitemeta}>
						<p>
							© {new Date().getFullYear()}{' '}
							www.potwinconstruction.com
						</p>
						<p> Website by Brandon Corey & Tyson Comer</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
