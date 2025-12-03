/**
 * Next.js Portfolio - Main Page
 * 
 * This is a scaffold example. Convert vanilla HTML/CSS/JS to React components.
 */

import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize any client-side code here
    // e.g., analytics, scroll animations
  }, []);

  return (
    <>
      <Head>
        <title>Rajat Mani Tripathi - Backend Developer</title>
        <meta name="description" content="Backend Developer specializing in Java, Spring Boot, Microservices, and Temporal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.svg" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

