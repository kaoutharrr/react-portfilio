// // 
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="portfolio">
//       <header className="header">
//         <h1>kaouthar's Portfolio</h1>
//         <nav>
//           <ul>
//             <li><a href="#about">About Me</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <section id="about" className="about">
//         <h2>About Me</h2>
//         <p>
//           Hello! I'm kaouthar, a passionate software developer and full-time student at 1337. I thrive on solving problems, learning new technologies, and creating innovative solutions. I'm currently working on backend development using Django, PostgreSQL, and Docker.
//         </p>
//       </section>

//       <section id="skills" className="skills">
//         <h2>Skills</h2>
//         <ul>
//           <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Responsive Design, API Integration, AJAX</li>
//           <li><strong>Backend:</strong> Python, Django, RESTful APIs, PostgreSQL, MongoDB, Docker</li>
//           <li><strong>Soft Skills:</strong> Problem Solving, Creativity, Adaptability, Communication</li>
//         </ul>
//       </section>

//       <section id="projects" className="projects">
//         <h2>Projects</h2>
//         <div className="project">
//           <h3>ft_transcendence</h3>
//           <p>
//             A single-page application built using Django and PostgreSQL with OAuth integration, featuring user accounts, chat functionality, and a dashboard.
//           </p>
//         </div>
//         <div className="project">
//           <h3>Minishell</h3>
//           <p>A custom shell project implemented in C with advanced process handling and pipe support.</p>
//         </div>
//         <div className="project">
//           <h3>Cub3D</h3>
//           <p>An interactive 3D game engine project using raycasting techniques in C.</p>
//         </div>
//       </section>

//       <section id="contact" className="contact">
//         <h2>Contact</h2>
//         <p>
//           Feel free to reach out for collaboration or opportunities!
//         </p>
//         <ul>
//           <li>Email: kaouthar@example.com</li>
//           <li>LinkedIn: <a href="https://linkedin.com/in/kaouthar" target="_blank" rel="noopener noreferrer">linkedin.com/in/kaouthar</a></li>
//           <li>GitHub: <a href="https://github.com/kaouthar" target="_blank" rel="noopener noreferrer">github.com/kaouthar</a></li>
//         </ul>
//       </section>

//       <footer className="footer">
//         <p>© 2025 kaouthar. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
// // 

// import React from 'react';
import './App.css';
import profileImage from './assets/profile.jpg';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import project3Image from './assets/project3.png';

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>kaouthar's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="about fade-in">
          <h2>About Me</h2>
          <img src={profileImage} alt="kaouthar" className="profile-image" />
          <p>
            Hello! I'm kaouthar, a passionate software developer and full-time student at 1337. I thrive on solving problems, learning new technologies, and creating innovative solutions. I'm currently working on backend development using Django, PostgreSQL, and Docker.
          </p>
        </section>

        <section id="skills" className="skills fade-in">
          <h2>Skills</h2>
          <ul>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, Responsive Design, API Integration, AJAX</li>
            <li><strong>Backend:</strong> Python, Django, RESTful APIs, PostgreSQL, MongoDB, Docker</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Creativity, Adaptability, Communication</li>
          </ul>
        </section>

        <section id="projects" className="projects fade-in">
          <h2>Projects</h2>
          <div className="project">
            <img src={project1Image} alt="ft_transcendence" />
            <h3>ft_transcendence</h3>
            <p>
              A single-page application built using Django and PostgreSQL with OAuth integration, featuring user accounts, chat functionality, and a dashboard.
            </p>
          </div>
          <div className="project">
            <img src={project2Image} alt="Minishell" />
            <h3>Minishell</h3>
            <p>A custom shell project implemented in C with advanced process handling and pipe support.</p>
          </div>
          <div className="project">
            <img src={project3Image} alt="Cub3D" />
            <h3>Cub3D</h3>
            <p>An interactive 3D game engine project using raycasting techniques in C.</p>
          </div>
        </section>

        <section id="contact" className="contact fade-in">
          <h2>Contact</h2>
          <p>
            Feel free to reach out for collaboration or opportunities!
          </p>
          <ul>
            <li>Email: kaouthar@example.com</li>
            <li>LinkedIn: <a href="https://linkedin.com/in/kaouthar-kouaz/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kaouthar-kouaz</a></li>
            <li>GitHub: <a href="https://github.com/kaoutharrr" target="_blank" rel="noopener noreferrer">github.com/kaoutharrr</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 kaouthar. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
