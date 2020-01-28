import React from 'react';

import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import ImageGrid from '../components/ImageGrid';

import styles from '../sass/Index.module.scss';
import heroImg from '../images/potwin-construction-hero-img.jpg';
import card1Img from '../images/potwin-construction-bathroom-5.jpg';
import card2Img from '../images/potwin-construction-kitchen-1.jpg';
import card3Img from '../images/potwin-construction-flooring-2.jpg';

const IndexPage = () => (
	<Layout>
		<section className={styles.hero} id='home'>
			<div className={styles.cta}>
				<h1>High quality custom home remodeling in Lincoln, NE</h1>
				<h5>
					Rain, snow, or shine, we’ll be there to help transform your
					home into a comfortable reality.{' '}
				</h5>
				<a href='#contact' className='btn btn--red'>
					Schedule your Consultation
				</a>
			</div>
			<img
				src={heroImg}
				alt='Potwin Construction kitchen remodel image'
			/>
		</section>
		<section className={styles.services} id='services'>
			<SectionHeading title='Services' />
			<div className={styles.services__cards}>
				<Card
					title='Home Remodeling'
					imgSrc={card1Img}
					imgAlt='Potwin Construction bathroom remodel'
					linkURL='#contact'
					linkText='Free Consultation'>
					Ready for something new and refreshing? Drop us a line!
				</Card>
				<Card
					title='Home Repair'
					imgSrc={card2Img}
					imgAlt='Potwin Construction kitchen remodel'
					linkURL='#contact'
					linkText='Free Consultation'>
					Have a room that needs some love? We got you covered!
				</Card>
				<Card
					title='Custom Work'
					imgSrc={card3Img}
					imgAlt='Potwin Construction flooring remodel'
					linkURL='#contact'
					linkText='Free Consultation'>
					Need something extra special? We want to hear about it!
				</Card>
			</div>
		</section>
		<section className={styles.projects} id='projects'>
			<SectionHeading title='Projects' />
			<p>Here's a small collection of our favorite recent projects.</p>
			<ImageGrid />
		</section>
		<section className={styles.secondaryCta}>
			<h2>Ready for your custom quote?</h2>
			<a href='#contact' className='btn btn-outline--white'>
				Let us know!
			</a>
		</section>
		<section className={styles.process} id='process'>
			<SectionHeading title='Process' />
		</section>
		<section className={styles.about} id='about'>
			<SectionHeading title='About Potwin Construction' />
		</section>
		<section className={styles.contact} id='contact'>
			<SectionHeading title='Ready for Your Free Consultation?' />
		</section>
	</Layout>
);

export default IndexPage;
