import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

// Project data - in a real app, this would likely come from an API
const projectsData = [
  {
    id: 1,
    title: 'Build It Records',
    description: 'An underground house music label I founded in 2015. Features artist profiles, music releases, and demo submissions. Built with React and Node.js, includes streaming integration and a custom CMS for managing music releases across sub-labels: Build It Deep and Build It Tech.',
    fullDescription: `
      <p>Build It Records is a modern web platform for our underground house music label, featuring three distinct sub-labels: Build It Records, Build It Deep, and Build It Tech. The website provides a comprehensive platform for music lovers to discover new artists, stream releases, and submit demos.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Three distinct branded experiences for each sub-label</li>
        <li>Artist profiles with biography and discography</li>
        <li>Music release pages with embedded streaming players</li>
        <li>Demo submission system for aspiring artists</li>
        <li>Event calendar and newsletter subscription</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Frontend: React with TypeScript deployed on Vercel</li>
        <li>Backend: Node.js API hosted on Render</li>
        <li>Database: PostgreSQL for importing and managing the music catalog</li>
        <li>Storage: Supabase for flexible data tables and authentication</li>
        <li>CMS: Custom admin panel for managing releases across sub-labels</li>
        <li>Streaming: Integration with SoundCloud and other music platforms</li>
      </ul>
    `,
    image: '/assets/png/BuildItRecords_Laptop.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'Render'],
    githubLink: 'https://github.com/AJSorbello/buildit-records',
    liveLink: 'https://www.builditrecords.com'
  },
  {
    id: 2,
    title: 'Bello Flix',
    description: 'Bello Flix is a Full-Stack movie web app that provides movie information details, user authentication, and personalized "favorite" movie lists. Built with the MERN stack (MongoDB, Express.js, React, Node.js).',
    fullDescription: `
      <p>Bello Flix is a comprehensive movie database application that offers users a complete movie-browsing experience. This MERN stack project demonstrates full-stack development capabilities with a focus on user experience and modern web technologies.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>User registration and authentication system with JWT</li>
        <li>Personalized movie lists allowing users to save favorites</li>
        <li>Comprehensive movie details including cast, ratings, and trailers</li>
        <li>Responsive design for optimal viewing on all devices</li>
        <li>Real-time search functionality with dynamic filters</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Frontend: React.js with hooks for state management</li>
        <li>Backend: Node.js with Express routing</li>
        <li>Database: MongoDB for flexible document storage</li>
        <li>Authentication: JWT (JSON Web Tokens) for secure user sessions</li>
        <li>API Integration: External movie database API for comprehensive data</li>
      </ul>
    `,
    image: '/assets/png/BelloFlix_Laptop.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RESTful API'],
    githubLink: 'https://github.com/AJSorbello/bello-flix',
    liveLink: 'https://belloflix.netlify.app/'
  },
  {
    id: 3,
    title: 'Angular Flix',
    description: 'AngularFlix is a Full-Stack movie web app developed using Angular and TypeScript. It provides detailed movie information, user authentication, and personalized favorite movie lists.',
    fullDescription: `
      <p>AngularFlix leverages the power of Angular and TypeScript to create a robust movie browsing platform. This project showcases modern front-end architecture with a strong focus on type safety and component-based design.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Angular Material UI components for a polished user interface</li>
        <li>Lazily loaded modules for optimized performance</li>
        <li>RxJS for reactive state management and asynchronous operations</li>
        <li>Type-safe API integration using TypeScript interfaces</li>
        <li>User profile management with favorite movie tracking</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Frontend: Angular 14+ with TypeScript</li>
        <li>State Management: RxJS Observables and Angular Services</li>
        <li>UI Framework: Angular Material and custom SCSS</li>
        <li>API Integration: HTTP Interceptors for authentication</li>
        <li>Testing: Jasmine and Karma for unit tests</li>
      </ul>
    `,
    image: '/assets/png/AngularFlix_Laptop.png',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'SCSS', 'RESTful API'],
    githubLink: 'https://github.com/AJSorbello/angular-flix',
    liveLink: 'https://angularflix.netlify.app/'
  },
  {
    id: 4,
    title: 'Chat App',
    description: 'A mobile chat application for iOS and Android that supports real-time communication, image sharing, location sharing, and offline access.',
    fullDescription: `
      <p>I developed this Chat App to demonstrate my ability to create cross-platform mobile applications with real-time functionality. Built with React Native and Firebase, the app provides a seamless messaging experience across both iOS and Android devices.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time message synchronization across devices</li>
        <li>Media sharing capabilities including images and location data</li>
        <li>Offline support with local data storage</li>
        <li>User authentication and profile customization</li>
        <li>Background notifications for new messages</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Framework: React Native for cross-platform development</li>
        <li>Backend: Firebase (Firestore, Authentication, Storage)</li>
        <li>Offline Support: AsyncStorage for local data persistence</li>
        <li>Maps Integration: React Native Maps for location sharing</li>
        <li>Media Handling: Expo Image Picker for camera and gallery access</li>
      </ul>
    `,
    image: '/assets/png/Android and iphone chat app.png',
    technologies: ['React Native', 'Firebase', 'Firestore', 'Expo', 'AsyncStorage', 'JavaScript'],
    githubLink: 'https://github.com/AJSorbello/chat-app',
    liveLink: 'https://expo.dev/@ajsorbello/chat-app'
  },
  {
    id: 5,
    title: 'Meet App',
    description: 'A serverless PWA using React with TDD. Integrates Google Calendar API for fetching events.',
    fullDescription: `
      <p>The Meet App is a serverless, progressive web application (PWA) that uses Test-Driven Development (TDD) principles and the Google Calendar API to help users find events in their city.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Offline functionality with service workers</li>
        <li>Data visualization with charts for event metrics</li>
        <li>Location-based filtering of events</li>
        <li>Progressive Web App capabilities for installation</li>
        <li>OAuth authentication with Google</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Framework: React with create-react-app</li>
        <li>Testing: Jest and Cucumber for BDD/TDD approach</li>
        <li>API: Google Calendar API with serverless functions</li>
        <li>Data Visualization: Recharts for statistical display</li>
        <li>Authentication: AWS Lambda for OAuth token handling</li>
      </ul>
    `,
    image: '/assets/png/CityLinkUp.png',
    technologies: ['React', 'Jest', 'Google API', 'AWS Lambda', 'Serverless', 'PWA'],
    githubLink: 'https://github.com/AJSorbello/meet-app',
    liveLink: 'https://ajsorbello.github.io/meet-app/'
  },
  {
    id: 6,
    title: 'Pokedex App',
    description: 'Pokedex is my first app created with HTML, CSS, and Javascript. It loads Pokemon characters from the Pokemon API.',
    fullDescription: `
      <p>The Pokedex App was my first web development project, created to learn the fundamentals of HTML, CSS, and JavaScript. It interfaces with the public Pokemon API to display information about different Pokemon characters.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Interactive list of Pokemon characters</li>
        <li>Detailed modal view showing Pokemon statistics</li>
        <li>Search functionality to find specific Pokemon</li>
        <li>Responsive design for mobile and desktop viewing</li>
        <li>API integration for dynamic data loading</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Frontend: Vanilla JavaScript, HTML5, and CSS3</li>
        <li>API Integration: Fetch API for asynchronous requests</li>
        <li>UI Components: Custom modal implementation</li>
        <li>Design: Flexbox for responsive layouts</li>
        <li>Performance: Image optimization and lazy loading</li>
      </ul>
    `,
    image: '/assets/png/Pokedex_SShot.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'RESTful API', 'Responsive Design'],
    githubLink: 'https://github.com/AJSorbello/pokedex-app',
    liveLink: 'https://ajsorbello.github.io/pokedex-app/'
  },
  {
    id: 7,
    title: 'Recipe App',
    description: 'The Recipe App allows users to browse and manage a variety of recipes. Built with Django.',
    fullDescription: `
      <p>The Recipe App is a comprehensive web application built with Django that enables users to discover, save, and manage their favorite recipes. This project demonstrates my proficiency in backend development with Python.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>User authentication and profile management</li>
        <li>Recipe categorization and tagging system</li>
        <li>Advanced search and filtering capabilities</li>
        <li>User ratings and reviews for recipes</li>
        <li>Favorites and personal recipe collections</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Backend: Django with Python</li>
        <li>Database: PostgreSQL for relational data storage</li>
        <li>Frontend: Django Templates with Bootstrap</li>
        <li>Deployment: PythonAnywhere for hosting</li>
        <li>Media Handling: AWS S3 for image storage</li>
      </ul>
    `,
    image: '/assets/png/RecipeApp_Laptop.png',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'HTML', 'CSS'],
    githubLink: 'https://github.com/AJSorbello/recipe-app',
    liveLink: 'https://ajsorbello.pythonanywhere.com/'
  },
  {
    id: 8,
    title: 'Bookstore',
    description: 'The Bookstore is an online platform built using Django that enables users to search, browse, and purchase books.',
    fullDescription: `
      <p>The Bookstore is a full-featured e-commerce platform built with Django that specializes in selling books online. This project showcases my ability to create complex web applications with user management, product catalogs, and payment processing.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Comprehensive book catalog with detailed information</li>
        <li>Shopping cart and checkout functionality</li>
        <li>User reviews and ratings system</li>
        <li>Author profiles and book recommendations</li>
        <li>Order tracking and history for users</li>
      </ul>
      
      <h3>Technical Implementation:</h3>
      <ul>
        <li>Backend: Django with Python</li>
        <li>Database: PostgreSQL for data persistence</li>
        <li>Payment Processing: Stripe API integration</li>
        <li>Deployment: Heroku platform</li>
        <li>Frontend: Django Templates with custom CSS</li>
      </ul>
    `,
    image: '/assets/png/Bookstore_Laptop.png',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Stripe', 'Heroku', 'JavaScript'],
    githubLink: 'https://github.com/AJSorbello/bookstore',
    liveLink: 'https://ajsorbello-bookstore.herokuapp.com/'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const project = projectsData.find(p => p.id === projectId);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn--med">Back to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__title">{project.title}</h1>
      </div>
      
      <div className="project-detail__content">
        <div className="project-detail__image-container">
          <img src={project.image} alt={project.title} className="project-detail__image" />
        </div>
        
        <div className="project-detail__info">
          <div className="project-detail__description" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          
          <div className="project-detail__tech">
            <h3>Technologies Used</h3>
            <div className="project-detail__tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-detail__tech-item">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-detail__links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn--med">
                View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn--med btn--theme">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-detail__navigation">
        <Link to="/#projects" className="btn btn--med">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
