// import { Link } from 'react-router-dom';
import '../../styles/Home.css';
function Home(){
  return (
    <div className="home-container">
      <section className="main">
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/images/profile_pic.jpg`} alt="Profile" height={200} />
        </div>
        <h1>Hi👋🏻, I'm <span className="highlight">"Rameshwar Bhand"</span></h1>
        <h2>A Passionate Full Stack Developer</h2>
        <hr/>
        <hr/>
        <p>
          I build web applications using modern technologies like React, Java, and C++.
          I'm always eager to learn and take on new challenges.
        </p>
        {/* <div className="cta-buttons">
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/contact" className="btn btn-outline">Contact Me</Link>
        </div> */}
      </section>

      <section className="skills">
        <h3>👨🏻‍💻Tech Stack👨🏻‍💻</h3>
        <div className="skills-grid">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>C++</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </div>
      </section>
    </div>
  );
};

export default Home;
