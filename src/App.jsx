import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/courseDetail.jsx"; // ✅ Import new component
import AllCourses from "./pages/AllCourses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating1 = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating1">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star-icon1 ${index < rating ? "selected" : ""}`}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};



// Star Rating Component
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0); // Count of clicks (total ratings)

  const handleRating = (newRating) => {
    setRating(newRating);
    setCount(count + 1);
  };

  return (
    <div className="star-rating">
      <span>{rating}</span> {/* ⭐ Display current rating on the left */}
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star-icon ${index < rating ? "selected" : ""}`}
          onClick={() => handleRating(index + 1)}
        />
      ))}
      <span>({count})</span> {/* ⭐ Show total ratings count in parentheses */}
    </div>
  );
};



function App() {
  return (
    <div className="container">
      <Header />

  
      <Routes>
        <Route path="/" element={<>
        
          <Home />
          <div className="banner-container">
        <img src="src\assets\images\first.png" alt="Learning Banner" />
      </div>
     

      <div className="services">
        <h4>Our Services</h4>
        <h1>Fostering a playful & engaging learning environment</h1>

        <div class="cardcontainer">
          <div class="card">
            <p>
            <div className="icon-text">
             <img src="src\assets\images\Frame 390 (1).png" alt="Learning Banner" className="imgicon"/>
             <h3>Interaction Design</h3>
            </div>
              <h5>Lessons on design that cover the most recent developments</h5>
              <a href='#'>Learn More &gt;</a>
            </p>
          </div>
          <div class="card">
            <p>
            <div className="icon-text">
              <img src="src\assets\images\Frame 390 (1).png" alt="Learning Banner" className="imgicon"/>
              <h3> Interaction Design</h3>
            </div>
              <h5>Lessons on design that cover the most recent developments</h5>
              <a href='#'>Learn More &gt;</a></p>
          </div>
          <div class="card">
            <p> 
            <div className="icon-text">
              <img src="src\assets\images\Frame 390 (1).png" alt="Learning Banner" className="imgicon"/>
              <h3> Interaction Design</h3>
            </div>
              <h5>Lessons on design that cover the most recent developments</h5>
              <a href='#'>Learn More &gt;</a></p>
          </div>
        </div>
       
      </div>


      <div className="thirdscreen">
      <h4>Our Services</h4>
      <h1>Our Most Popular Class</h1>
      <h3>Let's join our famous class, the knowledge provided will definitely be useful for you.</h3>
        <div className="thirdcardcontainer">

        <div className="card3">
             <img src="src\assets\images\figma.png" alt="figma" className="thirdimg"/>
             <div className="thirdtext">
              <h5>Design</h5>
              <h2>Figma UI UX Design</h2>
              <h3>Use Figma to get a job in UI Design, User Interface, User Experience design.</h3>
              <StarRating />
              <div >
                <img src="src\assets\images\Avatar.png" alt="lecturor" className="thirdimg2"/>
                <div className="thirdimg2text">
                  <h5 className="a">Robert James</h5>
                  <h5 className="b">2001 Enrolled</h5>
                </div>
                <h2 className="c">$17.84</h2>
              </div>
             </div>      
          </div>

          <div className="card3">
             <img src="src\assets\images\frontend.png" alt="figma" className="thirdimg"/>
             <div className="thirdtext">
              <h5>Development</h5>
              <h2>Frontend Development</h2>
              <h3>A course to build responsive, dynamic frontend interfaces with real-world projects.</h3>
              <StarRating />
              <div >
                <img src="src\assets\images\Avatar.png" alt="lecturor" className="thirdimg2"/>
                <div className="thirdimg2text">
                  <h5 className="a">Robert James</h5>
                  <h5 className="b">2001 Enrolled</h5>
                </div>
                <h2 className="c">$17.84</h2>
              </div>
             </div> 
          </div>

          <div className="card3">
             <img src="src\assets\images\backend.png" alt="figma" className="thirdimg"/>
             <div className="thirdtext">
              <h5>Development</h5>
              <h2>Backend Development</h2>
              <h3>A course to build robust, scalable backend systems with real-world projects.</h3>
              <StarRating />
              <div >
                <img src="src\assets\images\Avatar.png" alt="lecturor" className="thirdimg2"/>
                <div className="thirdimg2text">
                  <h5 className="a">Robert James</h5>
                  <h5 className="b">2001 Enrolled</h5>
                </div>
                <h2 className="c">$17.84</h2>
              </div>
             </div>
          </div>

        </div>
        <button className="btn_explore">Explore All Programs</button>
        
      </div>

      


      <div className="fourthscreen">
        <h4>Tutors</h4>
        <h1>Meet Our Heroes</h1>
        <div className="fourthcardcontainer">
          <div className="card4">
      
              <img src="src\assets\images\teachers.png" alt="teacher" className="fourthimg" />
              <div className="fourthtext">
              <h3>Robert James</h3>
              <h4>UI UX Developer</h4>
              </div>
            <StarRating1 /> {/* ⭐ Interactive Rating */}
           
          </div>

          <div className="card4">
          <img src="src\assets\images\teachers.png" alt="teacher" className="fourthimg" />
          <div className="fourthtext">
            <h3>Robert James</h3>
            <h4>UI UX Developer</h4>
          </div>
          <StarRating1 /> {/* ⭐ Interactive Rating */}
          </div>

          <div className="card4">
          <img src="src\assets\images\teachers.png" alt="teacher" className="fourthimg" />
          <div className="fourthtext">
          <h3>Robert James</h3>
          <h4>UI UX Developer</h4>
          </div>
          <StarRating1 /> {/* ⭐ Interactive Rating */}
          </div>
        </div>
      </div>

  

      <div className="fifthscreen">
        <div className="fifth">
        <img src="src\assets\images\fifth_logo.png" alt="fifthlogo" className="fifthimgicon"/>
        <h1>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</h1>
        <img src="src\assets\images\fifthimg2.jpeg" alt="fifthimg" className="fifthimg2"/>
        <h3>Ryan Dan</h3>
        </div>
      </div>



    


    <div className="sixthscreen">
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
    </div>

          </>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} /> {/* ✅ Dynamic Route */}
        <Route path="/courses/all" element={<AllCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   


      {/* Hero Section */}
     
      



      <Footer/>



     
    </div>
  

    
  );
  
}

export default App;


