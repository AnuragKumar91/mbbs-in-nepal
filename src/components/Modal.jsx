import React  from 'react';
import "./Modal.css"
const Modal = ({ closeModal }) => {
  document.addEventListener('click', (event) => {
    // Check if the click was outside the modal.
    if (event.target !== Modal && !Modal.contains(event.target)) {
      // Call the closeModal function.
      closeModal();
    }
  });

  return (
    <>
      <div className="modal fade show " style={{ display: 'block' }}  >
        <div className="modal-dialog"  >
          <div className="modal-content" id="modal-back">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close">X</button>
            </div> */}
            <div class="modal-body"  style={{padding:"2rem"}}>
         <h2 class="text-center ">Admission Form  <button type="button"  onClick={closeModal} class="close" data-dismiss="modal" aria-hidden="true">❌</button> </h2>
        

          <form >
            
            <input type="text" name="text" class="form-control"  placeholder="Enter your name "required/>
           
            <input type="text" name="email" class="form-control mt-2"    placeholder="Enter your email " required/>
           
            <input type="number" name="number" class="form-control mt-2 mb-2"placeholder="Enter your Mobile No" required/>
            
            <input type="text" name="text" class="form-control  mt-2"  placeholder="Your Current Location "required/>
          
            <input type="text" name="text" class="form-control  mt-2"  placeholder="Your District  "required/>
            <input type="text" name="text" class="form-control  mt-2"  placeholder="Maximum Qualifications  "required/>

            <input type="text" name="text" class="form-control  mt-2"  placeholder="Applied for which course  "required/>

            <input type="text" name="text" class="form-control  mt-2"  placeholder="University name   "required/>
            <div class="text-center" style={{marginTop:"10px"}}>
          <button type="button" class="btn btn-primary  " data-dismiss="modal">Submit Now</button>
        </div>          </form>
        </div>
        
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Modal;
