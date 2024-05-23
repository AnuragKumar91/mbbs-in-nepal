import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";

import logo from "../../assets/lo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "../SearchModal/SearchModal";

const NavBar = () => {
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
      
      axios.get(`your_search_api_endpoint?query=${searchText}`)
        .then(response => {
          setSearchResults(response.data);
        })
        .catch(error => {
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

  const getdata=()=>{
    console.log("fetching data........")

  }
  // const onSearch=()=>{
    
  //   setIsModalOpen(!isModalOpen)

  //   const searchText1 = searchText.toLowerCase()
  //   setSearchText("")

  //   if(searchText1 == 'college'){
  //     navigate('/mbbs-list-of-college-in-nepal')
  //   }
    
  // }
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-bar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" id="logo" />
          </Link>
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
                <Link className="nav-link" to="/mbbs-list-of-college-in-nepal">
                  Colleges
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mbbs-list-of-university-in-nepal">
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
        </div>
      </nav>
      {isModalOpen && (
        
         <div className="search-modal-overlay" onClick={onClose}>
          
  
           <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
          
           <div class="modal-header">
       
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
     </div>
             <input
               type="text"
               placeholder="Enter what you are looking for: College, Specialization, Course or Exam"
               onChange={(e) => setSearchText(e.target.value)}
               value={searchText}
               onKeyUp={getdata}
             />
             <div>
             {Array.isArray(searchResults) && searchResults.map((result, index) => (
                <div key={index} onClick={() => handleSearchItemClick(result)}>
                  {result.title}
                </div>
              ))}
            </div>
             
             {/* <button id="search-modal" className="btn btn-info search-button"  onClick={onSearch}>Search</button> */}
           </div>
         </div>
      
      )}
    </section>
  );
};

export default NavBar;
