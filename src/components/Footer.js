import React from 'react';

import MainNav from './MainNav';

import styles from '../sass/footer.module.scss';
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
						<p>Phone: 999-999-9999</p>
						<p> Email: email@email.com</p>
					</div>
				</div>
				<div className={styles.right}>
					<MainNav color='white' />
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
