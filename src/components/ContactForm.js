import React from 'react';

import Button from './Button';

import styles from '../sass/CommentForm.module.scss';
const ContactForm = () => {
	return (
		<form className={styles.commentForm}>
			<label htmlFor='name'>Name</label>
			<input type='text' name='name' id='name' placeholder='Name' />
			<label htmlFor='email'>Email</label>
			<input type='email' name='email' id='email' placeholder='Email' />
			<label htmlFor='comments'>Comments</label>
			<textarea name='comments' id='comments' placeholder='Comments' />
			<Button element='button' type='primary'>
				Schedule Your Consultation
			</Button>
		</form>
	);
};

export default ContactForm;
