import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import ImageGrid from '../components/ImageGrid';
import ProcessItem from '../components/ProcessItem';
import ContactForm from '../components/ContactForm';
import ContactItem from '../components/ContactItem';

import styles from '../sass/Index.module.scss';
import placeholder from '../images/placeholder.jpg';

const IndexPage = () => {
	const images = useStaticQuery(indexImageQuery);

	return (
		<Layout>
			<SEO title='Home' />
			<div id='home' className='anchor-top' />
			<section className={styles.hero}>
				<div className={styles.hero__container}>
					<div className={styles.hero__cta}>
						<h1>
							High-quality custom home remodeling in Lincoln, NE
						</h1>
						<h5>
							We will help you transform your home into that
							comfortable reality you've been dreaming of.
						</h5>
						<Button href='#contact' type='primary'>
							Schedule Your Consultation
						</Button>
					</div>
					<div className={styles.hero__img}>
						<Image
							fluid={images.heroImg.childImageSharp.fluid}
							alt='Potwin Construction kitchen remodel'
						/>
					</div>
				</div>
			</section>
			<section className={styles.services}>
				<div id='services' className='anchor' />
				<div className={styles.services__container}>
					<SectionHeading title='Services' />
					<div className={styles.services__cards}>
						<Card
							title='Home Remodeling'
							imgSrc={images.service1.childImageSharp.fluid}
							imgAlt='Potwin Construction bathroom remodel'
							linkURL='#contact'
							linkText='Free Consultation'>
							Ready for something new and refreshing? Drop us a
							line!
						</Card>
						<Card
							title='Home Repair'
							imgSrc={images.service2.childImageSharp.fluid}
							imgAlt='Potwin Construction kitchen remodel'
							linkURL='#contact'
							linkText='Free Consultation'>
							Have a room that needs some love? We've got you
							covered!
						</Card>
						<Card
							title='Custom Work'
							imgSrc={images.service3.childImageSharp.fluid}
							imgAlt='Potwin Construction flooring remodel'
							linkURL='#contact'
							linkText='Free Consultation'>
							Need something extra special? We want to hear about
							it!
						</Card>
					</div>
				</div>
			</section>
			<section className={styles.projects}>
				<div id='projects' className='anchor' />
				<SectionHeading title='Projects' />
				<ImageGrid />
			</section>
			<section className={styles.secondaryCta}>
				<h2>Ready for your custom quote?</h2>
				<Button href='#contact' type='outlineWhite'>
					Let us know!
				</Button>
			</section>
			<section className={styles.process}>
				<div id='process' className='anchor' />
				<SectionHeading title='Process' />
				<ProcessItem
					number='1'
					title='Free Consultation'
					imgSrc={images.process1.childImageSharp.fluid}
					imgAlt='Potwin Construction concrete repair'>
					When you’re ready to start a project together, just send us
					an email or give us a call. We’ll come to you to get a
					better idea of how we can help solve your needs.
				</ProcessItem>
				<ProcessItem
					number='2'
					title='Design and Building'
					imgSrc={images.process2.childImageSharp.fluid}
					imgAlt='Potwin Construction patio construction'>
					We’ll work with you to create a design that fits your unique
					needs and style. Once the plan is complete, we’ll source
					high quality materials that help us get the job done right.
				</ProcessItem>
				<ProcessItem
					number='3'
					title='Guaranteed Results'
					imgSrc={images.process3.childImageSharp.fluid}
					imgAlt='Potwin Construction shower remodel'>
					After your project is complete, we want you to be happy. If
					there’s something that needs a little adjusting, let us
					know! We want you to be 100% satisfied in your new space.
				</ProcessItem>
			</section>
			<section className={styles.about}>
				<div id='about' className='anchor' />
				<div className={styles.about__container}>
					<SectionHeading title='About Potwin Construction' />
					<div className={styles.about__content}>
						<div className={styles.about__img}>
							<img
								src={placeholder}
								alt='About Potwin Construction'
							/>
						</div>

						<div>
							<p>
								Lorem ipsum dolor amet organic poutine VHS
								aesthetic hexagon, asymmetrical skateboard
								biodiesel chartreuse kogi helvetica
								single-origin coffee glossier wayfarers roof
								party. Pok pok bushwick hot chicken, synth
								stumptown portland air plant tofu offal tilde
								pop-up mlkshk drinking vinegar. Migas semiotics
								distillery, tote bag wayfarers YOLO raclette
								succulents microdosing flexitarian. Neutra umami
								celiac, snackwave typewriter vinyl chicharrones
								narwhal wolf cloud bread aesthetic sriracha.
								Woke asymmetrical hoodie, PBR&B humblebrag hell
								of godard echo park man braid 90's truffaut etsy
								tbh austin shabby chic
							</p>
							<p>
								Vaporware echo park typewriter, art party synth
								try-hard readymade. Biodiesel readymade normcore
								food truck deep v stumptown. Gluten-free butcher
								williamsburg shabby chic tofu PBR&B kogi tote
								bag. Portland food truck 90's glossier biodiesel
								actually pitchfork vaporware kickstarter you
								probably haven't heard of them.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.contact}>
				<div id='contact' className='anchor' />
				<SectionHeading title='Ready for Your Free Quote?' />
				<div className={styles.contact__container}>
					<div className={styles.contact__form}>
						<ContactForm />
					</div>
					<div className={styles.contact__items}>
						<h4>Contact Us</h4>
						<ContactItem label='Phone' item='999-999-9999' />
						<ContactItem
							label='Email'
							item='email@email.com'
							href='mailto:email@email.com'
						/>

						<ContactItem
							label='Facebook'
							item='www.facebook.com/PotwinBuilds/'
							href='https://www.facebook.com/PotwinBuilds/'
						/>
						<p />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

const indexImageQuery = graphql`
	query IndexImages {
		heroImg: file(
			relativePath: { eq: "potwin-construction-hero-img.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		service1: file(
			relativePath: { eq: "potwin-construction-bathroom-5.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		service2: file(
			relativePath: { eq: "potwin-construction-kitchen-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		service3: file(
			relativePath: { eq: "potwin-construction-flooring-2.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		process1: file(
			relativePath: { eq: "potwin-construction-concrete-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		process2: file(
			relativePath: { eq: "potwin-construction-patio-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		process3: file(
			relativePath: { eq: "potwin-construction-bathroom-1.jpg" }
		) {
			childImageSharp {
				fluid(quality: 100) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
