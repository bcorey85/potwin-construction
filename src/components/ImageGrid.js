import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from '../sass/ImageGrid.module.scss';

const imageGridQuery = graphql`
	query ImageGrid {
		grid1: file(
			relativePath: { eq: "potwin-construction-flooring-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid2: file(
			relativePath: { eq: "potwin-construction-tilework-2.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid3: file(
			relativePath: { eq: "potwin-construction-tilework-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid4: file(relativePath: { eq: "potwin-construction-patio-2.jpg" }) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid5: file(relativePath: { eq: "potwin-construction-fencing-1.jpg" }) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid6: file(
			relativePath: { eq: "potwin-construction-bathroom-3.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid7: file(
			relativePath: { eq: "potwin-construction-bathroom-3.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid8: file(
			relativePath: { eq: "potwin-construction-bathroom-2.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid9: file(
			relativePath: { eq: "potwin-construction-bathroom-4.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		grid10: file(relativePath: { eq: "potwin-construction-shower-1.jpg" }) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

const ImageGrid = () => {
	const images = useStaticQuery(imageGridQuery);

	return (
		<div className={styles.grid}>
			<Image
				fluid={images.grid1.childImageSharp.fluid}
				alt='Potwin Construction flooring remodel'
				className={styles.img1}
			/>
			<Image
				fluid={images.grid2.childImageSharp.fluid}
				alt='Potwin Construction tile remodel 1'
				className={styles.img2}
			/>
			<Image
				fluid={images.grid3.childImageSharp.fluid}
				alt='Potwin Construction tile remodel 2'
				className={styles.img3}
			/>
			<Image
				fluid={images.grid4.childImageSharp.fluid}
				alt='Potwin Construction patio remodel'
				className={styles.img4}
			/>
			<Image
				fluid={images.grid5.childImageSharp.fluid}
				alt='Potwin Construction fencing remodel'
				className={styles.img5}
			/>
			<Image
				fluid={images.grid6.childImageSharp.fluid}
				alt='Potwin Construction concrete repair'
				className={styles.img6}
			/>
			<Image
				fluid={images.grid7.childImageSharp.fluid}
				alt='Potwin Construction bathroom remodel 1'
				className={styles.img7}
			/>
			<Image
				fluid={images.grid8.childImageSharp.fluid}
				alt='Potwin Construction bathroom remodel 2'
				className={styles.img8}
			/>
			<Image
				fluid={images.grid9.childImageSharp.fluid}
				alt='Potwin Construction bathroom remodel 3'
				className={styles.img9}
			/>
			<Image
				fluid={images.grid10.childImageSharp.fluid}
				alt='Potwin Construction shower remodel'
				className={styles.img10}
			/>
		</div>
	);
};

export default ImageGrid;
