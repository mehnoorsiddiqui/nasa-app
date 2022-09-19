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
		setError(null);
	};
	const handleEmail = async e => {
		setEmail('');
		e.preventDefault();
		if (email && email.length && email.match(isValidEmail)) {
		 await fetch(`/api/emailImage?userEmail=${email}`);
		} else {
			setError('Invalid Email');
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

					<p className={styles.disclaimer}> *We promise not to send you any emails outside this demo</p>
					<button className={styles.button} onClick={handleEmail}>
						Email me a picture from nasa
					</button>
					<p className={styles.info}> It may take a couple of minutes to fetch a high resolution image from NASA</p>

			
          <p className={styles.description}>
             This app is built using APIMatic's auto-generated SDKs for the NASA and SendGrid APIs.
          </p>
				</Container>
			</div>
		</Container>
	);
}

export default Home;
