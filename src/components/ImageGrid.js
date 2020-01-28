import React from 'react';

import styles from '../sass/ImageGrid.module.scss';
import img1 from '../images/potwin-construction-flooring-1.jpg';
import img2 from '../images/potwin-construction-tilework-2.jpg';
import img3 from '../images/potwin-construction-tilework-1.jpg';
import img4 from '../images/potwin-construction-patio-2.jpg';
import img5 from '../images/potwin-construction-fencing-1.jpg';
import img6 from '../images/potwin-construction-concrete-2.jpg';
import img7 from '../images/potwin-construction-bathroom-3.jpg';
import img8 from '../images/potwin-construction-bathroom-2.jpg';
import img9 from '../images/potwin-construction-bathroom-4.jpg';
import img10 from '../images/potwin-construction-shower-1.jpg';

const ImageGrid = () => {
	return (
		<div className={styles.grid}>
			<img
				src={img1}
				alt='Potwin Construction flooring remodel'
				className={styles.img1}
			/>
			<img
				src={img2}
				alt='Potwin Construction tile remodel 1'
				className={styles.img2}
			/>
			<img
				src={img3}
				alt='Potwin Construction tile remodel 2'
				className={styles.img3}
			/>
			<img
				src={img4}
				alt='Potwin Construction patio remodel'
				className={styles.img4}
			/>
			<img
				src={img5}
				alt='Potwin Construction fencing remodel'
				className={styles.img5}
			/>
			<img
				src={img6}
				alt='Potwin Construction concrete repair'
				className={styles.img6}
			/>
			<img
				src={img7}
				alt='Potwin Construction bathroom remodel 1'
				className={styles.img7}
			/>
			<img
				src={img8}
				alt='Potwin Construction bathroom remodel 2'
				className={styles.img8}
			/>
			<img
				src={img9}
				alt='Potwin Construction bathroom remodel 3'
				className={styles.img9}
			/>
			<img
				src={img10}
				alt='Potwin Construction shower remodel'
				className={styles.img10}
			/>
		</div>
	);
};

export default ImageGrid;
