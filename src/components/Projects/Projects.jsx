import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Build It Records',
      description: 'An underground house music label I founded in 2015. Features artist profiles, music releases, and demo submissions using node-mailer. Built with React, Typescript, JS and Node.js, includes streaming integration and a custom CMS for managing music releases across sub-labels: Build It Deep and Build It Tech.',
      image: process.env.PUBLIC_URL + '/assets/png/BuildItRecords_Laptop.png',
      githubLink: 'https://github.com/AJSorbello/buildit-records',
      liveLink: 'https://www.builditrecords.com',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Render'],
      detailedDescription: 'Build It Records is a modern web platform for our underground house music label, featuring three distinct sub-labels: Build It Records, Build It Deep, and Build It Tech. The frontend is built with React and TypeScript and deployed on Vercel for optimal performance. The backend API is hosted on Render, utilizing Node.js for RESTful endpoints. We implemented Supabase for flexible data storage solutions and PostgreSQL for efficiently importing and managing our extensive music catalog. The platform includes artist profiles, music release pages with streaming integration, and a custom content management system that allows for easy updates across all three sub-labels.'
    },
    {
      id: 2,
      title: 'Bello Flix',
      description: 'Bello Flix is a Full-Stack movie web app that provides movie information details, user authentication, and personalized "favorite" movie lists. Built with the MERN stack (MongoDB, Express.js, React, Node.js).',
      image: process.env.PUBLIC_URL + '/assets/png/BelloFlix_Laptop.png',
      githubLink: 'https://github.com/AJSorbello/bello-flix',
      liveLink: 'https://bellomovies.netlify.app/'
    },
    {
      id: 3,
      title: 'Angular Flix',
      description: 'AngularFlix is a Full-Stack movie web app developed using Angular and TypeScript. It provides detailed movie information, user authentication, and personalized favorite movie lists.',
      image: process.env.PUBLIC_URL + '/assets/png/AngularFlix_Laptop.png',
      githubLink: 'https://github.com/AJSorbello/angular-flix',
      liveLink: 'https://ajsorbello.github.io/myFlix-Angular-client/'
    },
    {
      id: 4,
      title: 'Chat App',
      description: 'A mobile chat application for iOS and Android that supports real-time communication, image sharing, location sharing, and offline access.',
      image: process.env.PUBLIC_URL + '/assets/png/Android and iphone chat app.png',
      githubLink: 'https://github.com/AJSorbello/chat-app',
      liveLink: 'https://expo.dev/@ajsorbello/chat-app'
    },
    {
      id: 5,
      title: 'Meet App',
      description: 'A serverless PWA using React with TDD. Integrates Google Calendar API for fetching events.',
      image: process.env.PUBLIC_URL + '/assets/png/CityLinkUp.png',
      githubLink: 'https://github.com/AJSorbello/meet-app',
      liveLink: 'https://ajsorbello.github.io/meet/'
    },
    {
      id: 6,
      title: 'Pokedex App',
      description: 'Pokedex is my first app created with HTML, CSS, and Javascript. It loads Pokemon characters from the Pokemon API.',
      image: process.env.PUBLIC_URL + '/assets/png/Pokedex_SShot.png',
      githubLink: 'https://github.com/AJSorbello/pokedex-app',
      liveLink: 'https://ajsorbello.github.io/Pokedex/'
    },
    {
      id: 7,
      title: 'Recipe App',
      description: 'The Recipe App allows users to browse and manage a variety of recipes. Built with Django.',
      image: process.env.PUBLIC_URL + '/assets/png/RecipeApp_Laptop.png',
      githubLink: 'https://github.com/AJSorbello/recipe-app',
      liveLink: 'https://ajsorbello.pythonanywhere.com/'
    },
    {
      id: 8,
      title: 'Bookstore',
      description: 'The Bookstore is an online platform built using Django that enables users to search, browse, and purchase books.',
      image: process.env.PUBLIC_URL + '/assets/png/Bookstore_Laptop.png',
      githubLink: 'https://github.com/AJSorbello/bookstore',
      liveLink: 'https://ajbooks-5dee885a9073.herokuapp.com/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <div className="projects__row">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Recent projects I've worked on
            </span>
          </h2>
          <div className="projects__row-content">
            {projects.map((project) => (
              <div className="projects__row-item" key={project.id}>
                <div className="projects__row-item-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="projects__row-item-content">
                  <h3 className="projects__row-item-heading">{project.title}</h3>
                  <p className="projects__row-item-description">{project.description}</p>
                  <div className="projects__row-item-buttons">
                    <Link to={`/project/${project.id}`} className="btn btn--outline">
                      View Details
                    </Link>
                    <div className="projects__row-item-buttons-secondary">
                      <a href={project.liveLink} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                        Live Site
                      </a>
                      <a href={project.githubLink} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
