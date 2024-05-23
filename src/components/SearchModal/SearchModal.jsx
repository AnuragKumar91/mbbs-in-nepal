import React from 'react'

const SearchModal = ({ onClose })=> {
  return (
  <>
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="Search..." />
        <button onClick={onClose}>Close</button>
      </div>
    </div> 
    {/* <div className="navBar_searchBox__3d6xc navBar_show__4G_rr"  onClick={onClose}>
      <div className="navBar_content__tyBRK">
        <div className="navBar_searchHeading__Ux_Jd">
          Search for best colleges, Courses, Exams and Education updates
        </div>
        <div className="navBar_searchClose__0bXul"></div>
        <ul className="navBar_searchForm__SiJnJ">
          <li>
            <input
              type="search"
              className="form-control"
              placeholder="Enter what you are looking for: College, Specialization, Course or Exam"
              value=""
            />
            <FontAwesomeIcon icon={faSearch} size="lg" color="#61a8f0" />
            <hr />
          </li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div> */}
  

  </>
  )
}

export default SearchModal