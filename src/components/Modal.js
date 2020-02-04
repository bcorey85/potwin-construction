import React from 'react';

import logo from '../images/potwin-construction-logo-white.svg';
import styles from '../sass/Modal.module.scss';
import leftArrow from '../images/bxs-left-arrow.svg';
import rightArrow from '../images/bxs-right-arrow.svg';

const Modal = props => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal__nav}>
				<img src={logo} alt='Potwin Construction logo' />
				<div
					className={styles.modal__close}
					onClick={props.toggleModal}
					role='button'
					tabIndex={0}
					onKeyDown={props.toggleModal}>
					<span />
					<span />
				</div>
			</div>
			<div className={styles.container}>
				<div
					onClick={() => props.handleCarousel('dec')}
					onKeyDown={() => props.handleCarousel('dec')}
					role='button'
					tabIndex={0}
					className={styles.arrow}>
					<img src={leftArrow} alt='Left arrow button' />
				</div>

				<div className={styles.modal__content}>{props.children}</div>
				<div
					onClick={() => props.handleCarousel('inc')}
					onKeyDown={() => props.handleCarousel('inc')}
					role='button'
					tabIndex={0}
					className={styles.arrow}>
					<img src={rightArrow} alt='Right arrow button' />
				</div>
			</div>
		</div>
	);
};

export default Modal;
