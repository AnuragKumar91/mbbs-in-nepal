import React, { useState } from 'react';

const Enquiry = ({ onClose }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, such as sending data to a server
   
    // After handling form submission, you can close the modal
    onClose();
  };

  return (
    <div className="modal fade show " style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Enquiry Form</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input type="text" name="text" className="form-control" placeholder="Enter your name" required />
              <input type="email" name="email" className="form-control mt-2" placeholder="Enter your email" required />
              <input type="tel" name="number" className="form-control mt-2" placeholder="Enter your Mobile No" required />
              {/* <input type="text" name="text" className="form-control mt-2" placeholder="Your Current Location" required />
              <input type="text" name="text" className="form-control mt-2" placeholder="Your District" required />
              <input type="text" name="text" className="form-control mt-2" placeholder="Maximum Qualifications" required />
              <input type="text" name="text" className="form-control mt-2" placeholder="Applied for which course" required />
              <input type="text" name="text" className="form-control mt-2" placeholder="University name" required /> */}
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-danger">Submit Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Enquiry;

