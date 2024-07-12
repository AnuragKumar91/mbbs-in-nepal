import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FaLongArrowAltUp, FaWhatsapp } from "react-icons/fa";
import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logo from "../../assets/mbbs-in-nepal-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   console.log(searchText);
  // }, [searchText]);

  useEffect(() => {
    if (searchText.trim() !== "") {
      axios
        .get(`your_search_api_endpoint?query=${searchText}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      // Clear search results if search text is empty
      setSearchResults([]);
    }
  }, [searchText]);

  const handleSearchItemClick = (item) => {
    // Navigate to the specific content page when clicked
    navigate(item.path);
    onClose();
  };

  const getdata = () => {
    console.log("fetching data........");
  };

  const ScrollIcons = () => {
    const [showIcons, setShowIcons] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const openWhatsApp = () => {
      const phoneNumber = "9473335050";
      const message =
        "Hello! I am interested in admission. Can you please provide me with more information?";
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    };

    // Add scroll event listener to show/hide icons

    return (
      <div className={`icons-container ${showIcons ? "show-icons" : ""}`}>
        {/* Scroll to top icon */}
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaLongArrowAltUp
            className="atf-scrollup-icon"
            id="scroll-icon"
            // style={{ color: "white" }}
          />
        </div>

        {/* WhatsApp icon */}

        <div className="whatsapp-icon" onClick={openWhatsApp}>
          <FaWhatsapp id="what-icon" />
        </div>
      </div>
    );
  };
  const openWhatsApp = () => {
    const phoneNumber = "9473335050";
    const message =
      "Hello! I am interested in admission. Can you please provide me with more information?";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <>
      {/* <TopNav/>
<NavBar/> */}
      <ScrollIcons />
      <div className="whatsapp-icon-left" onClick={openWhatsApp}>
        <FontAwesomeIcon icon={faWhatsapp} id="whatsapp-left" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" id="logo" className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-9">
            <div className="curl">
              <div className="teli">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link to="mailto:admission.providers@gmail.com" id="admision">
                  admission.providers@gmail.com
                </Link>

                <FontAwesomeIcon icon={faPhone} id="admisson-icon" />
                <Link to="tel:+91-94733 35050" id="admision">
                  +91-94733 35050{" "}
                </Link>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" id="nav-bar">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nav-ul" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about-nepal">
                      About Nepal
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mbbs-course-in-nepal">
                      Course
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/mbbs-list-of-college-in-nepal"
                    >
                      Colleges
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/mbbs-list-of-university-in-nepal"
                    >
                      University
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mbbs-exam-in-nepal">
                      Exams
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li id="glass" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </li>
                </ul>
              </div>
            </nav>
            {isModalOpen && (
              <div className="search-modal-overlay" onClick={onClose}>
                <div
                  className="search-modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={onClose}
                    ></button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter what you are looking for: College, Specialization, Course or Exam"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    onKeyUp={getdata}
                  />
                  <div>
                    {Array.isArray(searchResults) &&
                      searchResults.map((result, index) => (
                        <div
                          key={index}
                          onClick={() => handleSearchItemClick(result)}
                        >
                          {result.title}
                        </div>
                      ))}
                  </div>

                  {/* <button id="search-modal" className="btn btn-info search-button"  onClick={onSearch}>Search</button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
