import React from 'react';

import logo from '../images/potwin-construction-logo-white.svg';
import styles from '../sass/Modal.module.scss';

const Modal = props => {
	return (
		<div
			className={styles.modal}
			onClick={props.toggleModal}
			role='button'
			tabIndex={0}
			onKeyDown={props.toggleModal}>
			<div className={styles.modal__nav}>
				<img src={logo} />
				<div className={styles.modal__close}>
					<span />
					<span />
				</div>
			</div>
			<div className={styles.modal__content}>{props.children}</div>
		</div>
	);
};

export default Modal;
