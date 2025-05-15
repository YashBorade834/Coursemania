import { FaPlayCircle, FaLightbulb, FaCertificate, FaHeadset, FaMobileAlt } from "react-icons/fa";

  function About() {
    return (
     
      <div className="aboutcontent">
  
      

  <div className="about1">
      <div className="about-text">
        <h3>Empowering Learners !</h3>
        <h3>Shaping Futures !</h3>
        <h4>Our Mission is to make quality education accessible to everyone and anywhere !</h4>
      </div>
      <div className="about-image">
        <img src="src\assets\images\teacher.webp" alt="about" className="aboutimg1" />
      </div>
  </div>

  <div className="about-container">
  <h2 className="section-title">Who We Are</h2>
  <p className="section-description">
    We are a team of educators, developers, lifelong learners dedicated to revolutionizing the way knowledge is delivered to anyone, anywhere.
  </p>

  <div className="content-wrapper">
    <div className="left-section">
      <h3>What Makes Us Different</h3>
      <ul>
  <li>
    <FaPlayCircle className="icon" />
    <div className="text-container">
      <strong>Expert-Led Courses</strong>
      <span>Learn from experienced educators and industry experts.</span>
    </div>
  </li>
  <li>
    <FaLightbulb className="icon" />
    <div className="text-container">
      <strong>Practical Learning</strong>
      <span>Hands-on projects and real-world studies.</span>
    </div>
  </li>
  <li>
    <FaCertificate className="icon" />
    <div className="text-container">
      <strong>Certifications</strong>
      <span>Earn credentials recognized globally.</span>
    </div>
  </li>
  <li>
    <FaHeadset className="icon" />
    <div className="text-container">
      <strong>24/7 Support</strong>
      <span>Get round-the-clock assistance.</span>
    </div>
  </li>
  <li>
    <FaMobileAlt className="icon" />
    <div className="text-container">
      <strong>Mobile Friendly</strong>
      <span>Learn anytime, anywhere.</span>
    </div>
  </li>
</ul>

    </div>

    <div className="right-section">
      <h3>Our Mission</h3>
      <p>To democratize education and provide a flexible, interactive, and engaging platform for learners worldwide.</p>

      <h3>Our Vision</h3>
      <p>To become the go-to platform for anyone looking to upskill, reskill, or start their learning journey from scratch.</p>
    </div>
  </div>
</div>
      

    
    

      <div className="abtsixthscreen">
      <h4>Tutors</h4>
      <h1>Meet Our Heroes</h1>
      <div className="sixthcardcontainer">
        
        {/* Card 1 */}
        <div className="card6">
          <img src="src\assets\images\teachers.png" alt="teacher" className="sixthimg" />
          <div className="sixthtext">
            <h3>Robert James</h3>
            <h4>"The expert faculty, hands-on projects, and industry-focused curriculum helped me build strong technical skills and confidence. Highly recommended for anyone aiming to excel in web development!"</h4>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card6">
          <img src="src\assets\images\teachers.png" alt="teacher" className="sixthimg" />
          <div className="sixthtext">
            <h3>Sophia Carter</h3>
            <h4>"The expert faculty, hands-on projects, and industry-focused curriculum helped me build strong technical skills and confidence. Highly recommended for anyone aiming to excel in web development!"</h4>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card6">
          <img src="src\assets\images\teachers.png" alt="teacher" className="sixthimg" />
          <div className="sixthtext">
            <h3>Daniel Smith</h3>
            <h4>"The expert faculty, hands-on projects, and industry-focused curriculum helped me build strong technical skills and confidence. Highly recommended for anyone aiming to excel in web development!"</h4>
          </div>
        </div>


      </div>
      <p>“This platform changed the way I learn — it’s so interactive and fun.”</p>
    </div>


   
        
     
    
      
      </div>


    );
    
  }
  
  export default About
  