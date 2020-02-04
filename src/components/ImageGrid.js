import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../sass/ImageGrid.module.scss';
import Modal from './Modal';

const imageGridQuery = graphql`
	query ImageGrid {
		grid1: file(
			relativePath: { eq: "potwin-construction-flooring-1.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 756) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid2: file(
			relativePath: { eq: "potwin-construction-tilework-2.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 1080) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid3: file(
			relativePath: { eq: "potwin-construction-tilework-1.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 443) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid4: file(relativePath: { eq: "potwin-construction-patio-2.jpg" }) {
			childImageSharp {
				fixed(quality: 100, width: 1008) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid5: file(relativePath: { eq: "potwin-construction-fencing-1.jpg" }) {
			childImageSharp {
				fixed(quality: 100, width: 865) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid6: file(
			relativePath: { eq: "potwin-construction-concrete-2.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 756) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid7: file(
			relativePath: { eq: "potwin-construction-bathroom-3.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 528) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid8: file(
			relativePath: { eq: "potwin-construction-bathroom-2.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 600) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid9: file(
			relativePath: { eq: "potwin-construction-bathroom-4.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 810) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid10: file(relativePath: { eq: "potwin-construction-shower-1.jpg" }) {
			childImageSharp {
				fixed(quality: 100, width: 1137) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid11: file(relativePath: { eq: "potwin-construction-shower-3.jpg" }) {
			childImageSharp {
				fixed(quality: 100, width: 1008) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
		grid12: file(
			relativePath: { eq: "potwin-construction-bathroom-9.jpg" }
		) {
			childImageSharp {
				fixed(quality: 100, width: 789) {
					...GatsbyImageSharpFixed_withWebp
				}
			}
		}
	}
`;

const ImageGrid = () => {
	const images = useStaticQuery(imageGridQuery);
	const imageArray = Object.values(images);

	const [ modalShowing, setModalShowing ] = useState(false);
	const [ currentImage, setCurrentImage ] = useState(
		imageArray[0].childImageSharp.fixed
	);
	const [ currentIndex, setCurrentIndex ] = useState(0);

	const openModal = e => {
		document.documentElement.style.overflowY = 'hidden';
		document.documentElement.style.marginRight = '15px';
		const imageIndex = e.target.title - 1;
		setCurrentIndex(imageIndex);
		setCurrentImage(imageArray[imageIndex].childImageSharp.fixed);

		setModalShowing(true);
	};

	const closeModal = e => {
		document.documentElement.style.overflowY = 'scroll';
		document.documentElement.style.marginRight = '0';
		setModalShowing(false);
	};

	const handleCarousel = (e, direction) => {
		e.stopPropagation();
		if (currentIndex < imageArray.length - 1 && direction === 'inc') {
			setCurrentIndex(currentIndex + 1);
			setCurrentImage(imageArray[currentIndex + 1].childImageSharp.fixed);
		} else if (currentIndex > 0 && direction === 'dec') {
			setCurrentIndex(currentIndex - 1);
			setCurrentImage(imageArray[currentIndex - 1].childImageSharp.fixed);
		} else if (currentIndex === 0 && direction === 'dec') {
			setCurrentIndex(imageArray.length - 1);
			setCurrentImage(
				imageArray[imageArray.length - 1].childImageSharp.fixed
			);
		} else {
			setCurrentIndex(0);
			setCurrentImage(imageArray[0].childImageSharp.fixed);
		}
	};

	return (
		<div className={styles.grid}>
			{modalShowing && (
				<Modal toggleModal={closeModal} handleCarousel={handleCarousel}>
					<Image
						fixed={currentImage}
						imgStyle={{
							objectFit: 'contain',
							height: '100%',
							width: '100%'
						}}
					/>
				</Modal>
			)}

			<div
				onClick={openModal}
				className={styles.img1}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid1.childImageSharp.fixed}
					alt='Potwin Construction flooring remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='1'
				/>
			</div>

			<div
				onClick={openModal}
				className={styles.img2}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid2.childImageSharp.fixed}
					alt='Potwin Construction tile remodel 1'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='2'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img3}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid3.childImageSharp.fixed}
					alt='Potwin Construction tile remodel 2'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='3'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img4}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid4.childImageSharp.fixed}
					alt='Potwin Construction patio remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='4'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img5}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid5.childImageSharp.fixed}
					alt='Potwin Construction fencing remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='5'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img6}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid6.childImageSharp.fixed}
					alt='Potwin Construction concrete repair'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='6'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img7}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid7.childImageSharp.fixed}
					alt='Potwin Construction bathroom remodel 1'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='7'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img8}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid8.childImageSharp.fixed}
					alt='Potwin Construction bathroom remodel 2'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='8'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img9}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid9.childImageSharp.fixed}
					alt='Potwin Construction bathroom remodel 3'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='9'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img10}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid10.childImageSharp.fixed}
					alt='Potwin Construction shower remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='10'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img11}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid11.childImageSharp.fixed}
					alt='Potwin Construction shower remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='11'
				/>
			</div>
			<div
				onClick={openModal}
				className={styles.img12}
				onKeyDown={openModal}
				role='button'
				tabIndex={0}>
				<Image
					fixed={images.grid12.childImageSharp.fixed}
					alt='Potwin Construction shower remodel'
					style={{
						height: '100%',
						width: '100%'
					}}
					title='12'
				/>
			</div>
		</div>
	);
};

export default ImageGrid;
