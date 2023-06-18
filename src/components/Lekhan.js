import React, { useEffect } from "react";
import $ from "jquery";

const Lekhan = () => {
  useEffect(() => {
    // Your JavaScript code here
    // For example:
    $("#menu-btn").click(function () {
      $("nav .navigation ul").addClass("active");
    });

    $("#menu-close").click(function () {
      $("nav .navigation ul").removeClass("active");
    });
  }, []);
  const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AppLogic</title>
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    />

    <link rel="stylesheet" href="styles.css" />

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <nav>
      <img src="images/logofinal (2).png" alt="" />
      
      <div class="navigation">
        <ul>
          <i id="menu-close" class="fas fa-times"></i>
          <li><a href="#home">Home</a></li>
          <li><a href="#course">Courses</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#">Contact us</a></li>
          
          <li><a href="/login">Login</a></li>
        </ul>
        <img id="menu-btn" src="images/download.png" alt="" />
      </div>
    </nav>

    <section id="home">
      <h2>Applogic Computer Institute</h2>
      <h2>Helps You In Enhancing Your Coding Skills</h2>
      <p>
        This Institution teaches complex Coding concepts in a very simple manner, So that every
        individual can understand and grasp the core concepts. It also helps the Home Makers to 
        improve their knowledge in field of Technology. This is the place where one child can build
        a strong Foundation in their education, character development, and personal growth.
      </p>
      <div class="btn">
        <a class="blue" href="#">Learn More</a>
        <a class="yellow" href="#">Visit Courses</a>
      </div>
    </section>

    <section id="features">
      <h1>Awesome Features</h1>
      <p>Experienced Instructors who can provide guidance and expertise in various computer-related subjects </p>
      <p>and technologies.</p>     
      <div class="fea-base">
        <div class="fea-box">
          <i class="fas fa-graduation-cap"></i>
          <h3>Experienced Instructors</h3>
          <p>
            This institute typically have qualified and experienced instructors who can provide 
            guidance and expertise in various computer-related subjects and technologies.
          </p>
        </div>
        <div class="fea-box">
          <i class="fas fa-file-certificate"></i>
          <h3>Practical Hands-on Training</h3>
          <p>
            This Institute emphasize hands-on training to ensure students gain practical skills. They provide 
            access to computer labs equipped with the necessary software and hardware to allow students
            to apply their knowledge through practical exercises and projects.
          </p>
        </div>
        <div class="fea-box">
          <i class="fas fa-award"></i>
          <h3>Course Certification</h3>
          <p>
            This Institution offers certification programs upon completion of specific courses or tracks.
            These certifications can add value to a student's resume and demonstrate their proficiency 
            in a particular technology or skill.
          </p>
        </div>
      </div>
    </section>
    <section id="course">
      <h1>Our Popular Courses</h1>
      <p>Programming Language's and Package's </p>
      <div class="course-box">
        <div class="courses">
          <img src="images/course1.jpg" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>C Language</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span>(789)</span>
            </div>
          </div>
          <div class="cost">$46.13</div>
        </div>
        <div class="courses">
          <img src="images/course2.jpg" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>Java</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <span>(356)</span>
            </div>
          </div>
          <div class="cost">$48.56</div>
        </div>
        <div class="courses">
          <img src="images/pythonimg.jpg"" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>Python</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <span>(390)</span>
            </div>
          </div>
          <div class="cost">$48.56</div>
        </div>
        <div class="courses">
          <img src="images/courses.jpg" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>Tally</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>(276)</span>
            </div>
          </div>
          <div class="cost">$49.12</div>
        </div>
        <div class="courses">
          <img src="images/course4.jpg" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>MS-Office</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span>(735)</span>
            </div>
          </div>
          <div class="cost">$30.35</div>
        </div>
        <div class="courses">
          <img src="images/course5.jpg" alt="" />
          <div class="details">
            <span>Updated 13-06-2023</span>
            <h6>Autocad</h6>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <span>(239)</span>
            </div>
          </div>
          <div class="cost">$50.92</div>
        </div>
      </div>
    </section>
    <section id="registration">
      <div class="reminder">
        <p>Get 100 Online Courses for Free</p>
        <h1>Register To Get It</h1>
        <div class="time">
          <div class="date">
            18 <br />
            Days
          </div>
          <div class="date">
            23 <br />
            Hours
          </div>
          <div class="date">
            06 <br />
            Minutes
          </div>
          <div class="date">
            58 <br />
            Seconds
          </div>
        </div>
      </div>
      <div class="form">
        <h3>Create Free Account Now!</h3>
        <input type="text" placeholder="Name" name="" id="" />
        <input type="text" placeholder="Email Address" name="" id="" />
        <input type="text" placeholder="Phone Number" name="" id="" />
        <div class="btn">
          <a class="yellow" href="#">Submit Form</a>
        </div>
      </div>
    </section>
    <!-- <section id="experts">
      <h1>Community Experts</h1>
      <p>
        Here the people are high tanlented and experience persons to guide you
      </p>
      <div class="expert-box">
        <div class="profile">
          <img
            src="https://i.pinimg.com/originals/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
            alt=""
          />
          <h3>Lekhan Iconic</h3>
          <p>Python & Algorithm Experts</p>
          <div class="pro-link">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </section> -->

    <footer>
      <div class="footer-col">
        <h3>Top Products</h3>
        <li>Manage Reputation</li>
        <li>Power Tool</li>
        <li>Managed Website</li>
        <li>Marketing Service</li>
      </div>
      <div class="footer-col">
        <h3>Quick Links</h3>
        <li>Jobs</li>
        <li>Brand Assets</li>
        <li>Invester Relation</li>
        <li>Terms of Services</li>
      </div>
      <div class="footer-col">
        <h3>Features</h3>
        <li>Power Tools</li>
        <li>Managed Website</li>
        <li>Marketing Services</li>
      </div>

      <div class="footer-col">
        <h3>Resources</h3>
        <li>Reaseach</li>
        <li>Experts</li>
        <li>Guides</li>
        <li>Marketing Service</li>
      </div>
      <div class="footer-col">
        <h3>Newsletter</h3>
        <p>You can trust us. we only send promo offers,</p>
        <div class="subscribe">
          <input type="text" placeholder="Your Email Address" />
          <a href="#" class="yellow">SUBSCRIBE</a>
        </div>
      </div>
      <div class="copyright">
        <p>
          copyright @2020 All rights reserved | This template is made by
          Applogic.
        </p>
        <div class="pro-links">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
    <script>
      $("#menu-btn").click(function () {
        $("nav .navigation ul").addClass("active");
      });
      $("#menu-close").click(function () {
        $("nav .navigation ul").removeClass("active");
      });
    </script>
  </body>
</html>  `;

  return (
    <div>
      <link rel="stylesheet" href="Styles.css" />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </div>
  );
};

export default Lekhan;
