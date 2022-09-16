import React, { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import styles from './Home.module.css';
import { Container } from 'react-bootstrap';

function Home() {
	const globeEl = useRef();
	const [email, setEmail] = useState('');
	const [error, setError] = useState(null);

	// Auto-rotate
	useEffect(() => {
		globeEl.current.controls().autoRotate = true;
		globeEl.current.controls().autoRotateSpeed = 0.5;
	}, []);

	const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const validateEmail = e => {
		setEmail(e.target.value);
	};
	const handleEmail = async e => {
		setEmail('');
		e.preventDefault();
		if (email && email.length && email.match(isValidEmail)) {
		 await fetch(`/api/emailImage?userEmail=${email}`);
		} else {
			setError('Email is invalid');
		}
	};

	return (
		<Container fluid={true} style={{ padding: 0 }}>
			<Globe
				height={400}
				ref={globeEl}
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
				backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
			/>

			<div className={styles.homeContent}>
				<h1>Million Mile Views via a NASA API 🌎 </h1>
				<p>⭐🌟☄🌠🌟☀🌌🪐🌍🌚🌙🌕</p>
				<div className={styles.buttons} />
				<Container className={styles.aboutContent}>
					<input
						id="email"
						name="email"
						placeholder="Enter your email"
						value={email}
						onChange={validateEmail}
						className={styles.input}
					/>

					 {error && <p  className={styles.error}>{error}</p>}

					<button className={styles.button} onClick={handleEmail}>
						Email me a picture from nasa
					</button>

			
          <p className={styles.description}>
             App is built with APIMatic SDK. It is using the NASA API and Sendgrid API for displaying the
            contents(images/text)
          </p>
				</Container>
			</div>
		</Container>
	);
}

export default Home;
