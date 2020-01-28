import React from 'react';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import ImageGrid from '../components/ImageGrid';
import ProcessItem from '../components/ProcessItem';
import ContactForm from '../components/ContactForm';
import ContactItem from '../components/ContactItem';
import Banner from '../components/Banner';

import styles from '../sass/Index.module.scss';
import heroImg from '../images/potwin-construction-hero-img.jpg';
import card1Img from '../images/potwin-construction-bathroom-5.jpg';
import card2Img from '../images/potwin-construction-kitchen-1.jpg';
import card3Img from '../images/potwin-construction-flooring-2.jpg';
import process1Img from '../images/potwin-construction-concrete-1.jpg';
import process2Img from '../images/potwin-construction-patio-1.jpg';
import process3Img from '../images/potwin-construction-bathroom-1.jpg';
import placeholder from '../images/placeholder.jpg';

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<section className={styles.hero} id='home'>
			<div className={styles.cta}>
				<h1>High quality custom home remodeling in Lincoln, NE</h1>
				<h5>
					Rain, snow, or shine, we’ll be there to help transform your
					home into a comfortable reality.{' '}
				</h5>
				<Button href='#contact' type='primary'>
					Schedule your Consultation
				</Button>
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
			<Button href='#contact' type='outlineWhite'>
				Let us know!
			</Button>
		</section>
		<section className={styles.process} id='process'>
			<SectionHeading title='Process' />
			<ProcessItem
				number='1'
				title='Free Consultation'
				imgSrc={process1Img}
				imgAlt='Potwin Construction concrete repair'>
				When you’re ready to start a project together, just send us an
				email or give us a call. We’ll come to you to get a better idea
				of how we can help solve your needs.
			</ProcessItem>
			<ProcessItem
				number='2'
				title='Design and Building'
				imgSrc={process2Img}
				imgAlt='Potwin Construction patio construction'>
				We’ll work with you to create a design that fits your unique
				needs and style. Once the plan is complete, we’ll work on
				sourcing high quality materials that help us get the job done
				right.
			</ProcessItem>
			<ProcessItem
				number='3'
				title='Guarenteed Results'
				imgSrc={process3Img}
				imgAlt='Potwin Construction shower remodel'>
				After your custom project is complete, we’ll review how we did
				with you. If there’s something that needs a little adjusting,
				let us know! We want you to be 100% satisfied with your new
				space.
			</ProcessItem>
		</section>
		<section className={styles.about} id='about'>
			<div className={styles.about__container}>
				<SectionHeading title='About Potwin Construction' />
				<div className={styles.about__content}>
					<img src={placeholder} alt='About Potwin Construction' />
					<div>
						<p>
							Lorem ipsum dolor amet organic poutine VHS aesthetic
							hexagon, asymmetrical skateboard biodiesel
							chartreuse kogi helvetica single-origin coffee
							glossier wayfarers roof party. Pok pok bushwick hot
							chicken, synth stumptown portland air plant tofu
							offal tilde pop-up mlkshk drinking vinegar. Migas
							semiotics distillery, tote bag wayfarers YOLO
							raclette succulents microdosing flexitarian. Neutra
							umami celiac, snackwave typewriter vinyl
							chicharrones narwhal wolf cloud bread aesthetic
							sriracha. Woke asymmetrical hoodie, PBR&B humblebrag
							hell of godard echo park man braid 90's truffaut
							etsy tbh austin shabby chic
						</p>
						<p>
							Vaporware echo park typewriter, art party synth
							try-hard readymade. Biodiesel readymade normcore
							food truck deep v stumptown. Gluten-free butcher
							williamsburg shabby chic tofu PBR&B kogi tote bag.
							Portland food truck 90's glossier biodiesel actually
							pitchfork vaporware kickstarter you probably haven't
							heard of them.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className={styles.contact} id='contact'>
			<div className={styles.contact__items}>
				<SectionHeading title='Ready for Your Free Consultation?' />
				<Banner>Let's Talk!</Banner>
				<ContactItem label='Phone' item='999-999-9999' />
				<ContactItem label='Email' item='email@email.com' />
				<p />
			</div>
			<div className={styles.contact__form}>
				<ContactForm />
			</div>
		</section>
	</Layout>
);

export default IndexPage;
