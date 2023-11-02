import React, { useState, useEffect } from "react";
import "./index.css";
import Form from "./Form";
import technicianimage from "./Image/Technician 2.jpg";
import tv from "./Image/TV.png";

function App() {
  const [isContactPopupOpen, setContactPopupOpen] = useState(false);

  const toggleContactPopup = () => {
    setContactPopupOpen(!isContactPopupOpen);
  };
  

  useEffect(() => {
    const scrollHandlers = {
      scrollToWhyChoose: () => {
        const whyChooseSection = document.getElementById("why-choose-section");
        whyChooseSection.scrollIntoView({ behavior: "smooth" });
      },
      scrollToAbout: () => {
        const aboutSection = document.getElementById("about-section");
        aboutSection.scrollIntoView({ behavior: "smooth" });
      },
    };

    const handleScrollTo = (handler) => () => {
      handler();
      setContactPopupOpen(false); // Close contact popup when scrolling to a section
    };

    const navbarButtons = document.querySelectorAll(".navbar-button");
    navbarButtons.forEach((button) => {
      const target = button.getAttribute("data-target");
      if (target && scrollHandlers[target]) {
        button.addEventListener("click", handleScrollTo(scrollHandlers[target]));
      }
    });

    return () => {
      navbarButtons.forEach((button) => {
        const target = button.getAttribute("data-target");
        if (target && scrollHandlers[target]) {
          button.removeEventListener("click", handleScrollTo(scrollHandlers[target]));
        }
      });
    };
  }, []);

  return (
    <div>
      <header className="header">
        <h1 className="header-h1">Customer Care Service</h1>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <button className="navbar-button" data-target="scrollToWhyChoose">
                Why Choose Us?
              </button>
            </li>
            <li>
              <button className="navbar-button" data-target="scrollToAbout">
                About Us
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="tvimage">
        <img src={tv} alt="Tv" />
      </div>
      <div className="c-box c-box--arrow-bottom">
        <div className="texth2">
          You just have to fill the form and our execute will call you in less than 1 working hour.
        </div>
      </div>
      <Form />
      <div className="content">
        <section id="why-choose-section" className="sectionwcu">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Submit Your Details</li>
            <li>Find Best Technician</li>
            <li>Certified and Verified Technicians</li>
            <li>Quick Response</li>
            <li>24/7 Doorstep Service</li>
            <li>Same Day Service Guarantee</li>
          </ul>
        </section>
        <section id="about-section" className="section">
          <h2>About Us</h2>
          <div className="about-image">
            <img src={technicianimage} alt="Technician" />
            <div className="about-image-text2">
              <p>
                For the quickest and instant home service from our expert technicians, please book online.
                Once your service request is booked, you will receive a request ID via SMS.
                Then, you will get a confirmation call from our effective customer support team based on your selected timing.
                Our technician will connect with you to fix an appointment, and you can expect our technician on time at your doorstep.
                In case you face any problem after the servicing is done, you can easily contact us through email and phone call. We will take action within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Customer Care Service. All rights reserved.</p>
      </footer>

      <div className="contact-pop">
        <button className="contact-button" onClick={toggleContactPopup}>
          Contact
        </button>
        {isContactPopupOpen && (
          <div className="contact-popup active">
            <div className="contact-popup-content">
              <button className="close" onClick={toggleContactPopup}>
                &times;
              </button>
              <h3>Contact Information</h3>
              <p>
                Phone: <a href="tel:+916290207943">+91 6290207943</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:servicecustomecare08@gmail.com">
                servicecustomecare08@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
