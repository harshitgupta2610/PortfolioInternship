import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div class="container">
        <div class="main-content">
            <div class="sidebar">
                <div class="profile-image"></div>
                <h1 class="name">Harshit Gupta</h1>
                <p class="title">Full Stack Web Developer</p>
                <p class="location">📍 Ghaziabad, India</p>
                <p class="tagline">Building Real Products For Real Clients, Not Just More Projects</p>
                
                <div class="social-links">
                    <a href="https://drive.google.com/file/d/1m0VMmItjc4QHni_JVsS-t9L7WYlCnFd7/view" class="resume-btn">
                        📄 Resume
                    </a>
                    <a href="https://github.com/harshitgupta2610" title="GitHub">
                        <svg class="social-icon" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="harshitgupta25042005@gmail.com" title="Email">
                        <svg class="social-icon" viewBox="0 0 24 24">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                        </svg>
                    </a>
                    <a  href="https://www.linkedin.com/in/harshitgupta2610" title="LinkedIn">
                        <svg class="social-icon" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>

                <div class="cta-section">
                    <h2 class="cta-title">Want to Work Together?</h2>
                    <a href="#" class="cta-btn">Get in Touch</a>
                </div>
            </div>

            <div class="content">
                <div class="section">
                    <h2 class="section-title">About Me</h2>
                    <p class="about-text">I'm a 20-year-old experienced Full Stack Developer with a knack for building products that make a difference. My expertise spans both frontend and backend technologies, enabling me to craft comprehensive solutions from the ground up.</p>
                    
                    <p class="about-text"> I’ve interned as a Full Stack Developer at SmartInternz, where I worked on dynamic, secure, and scalable web platforms. Notably, I developed Sky, a real-time social media web app, and contributed to the Unified AICTE Portal, a collaborative curriculum design platform. </p>
                    
                    <p class="about-text"> With over 200+ DSA problems solved across LeetCode and CodeChef, I enjoy solving complex problems and building efficient systems.</p>
                    
                    <p class="about-text">I’ve also showcased my creativity by winning a Reel Making Competition and engaging in innovative education-tech solutions through events like Innotech’23. </p>
                </div>

                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    
                    <div class="skills-category">
                        <h3>Languages</h3>
                        <div class="skills-tags">
                            <span class="skill-tag language">JavaScript</span>
                            <span class="skill-tag language">C++</span>
                            <span class="skill-tag language">Python</span>
                            <span class="skill-tag language">HTML</span>
                            <span class="skill-tag language">CSS</span>
                        </div>
                    </div>

                    <div class="skills-category">
                        <h3>Frameworks</h3>
                        <div class="skills-tags">
                            <span class="skill-tag framework">ReactJS</span>
                            <span class="skill-tag framework">NextJS</span>
                            <span class="skill-tag framework">ExpressJS</span>
                            <span class="skill-tag framework">TailwindCSS</span>
                        </div>
                    </div>

                    <div class="skills-category">
                        <h3>Backend</h3>
                        <div class="skills-tags">
                            <span class="skill-tag backend">Node.js</span>
                            <span class="skill-tag framework">ExpressJS</span>
                        </div>
                    </div>

                    <div class="skills-category">
                        <h3>Databases</h3>
                        <div class="skills-tags">
                            <span class="skill-tag database">MongoDB</span>
                            <span class="skill-tag database">SQL</span>
                        </div>
                    </div>
                </div>
                <Experience/>
                <Education/>
                <Projects/>
            </div>
      </div>
        
    </div>
  );
};

export default Home;
