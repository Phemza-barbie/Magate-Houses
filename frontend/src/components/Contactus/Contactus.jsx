import React from 'react'
import "./Contactus.css"

const Contactus = () => {
  return (
    <div className='contact'>
      <div className='context'>
        <h1>CONTACT US</h1>
      </div>
      <div className='con1'>
      <div className='con2'>
        <h3>Contact Us</h3>
        <div className='con3'>
          <div>
            <i></i>
            <p>13 Akanro street, Off Idi Araba, Mushin, Lagos, Nigeria.</p>
          </div>
          <div>
            <i></i>
            <p>+2349038691486, +2347035887162, +2347056512721, +2347056512731, +2347056512737</p>
          </div>
          <div>
            <i></i>
            <p>ogunbayooba@gmail.com</p>
          </div>
          <div>
            <i></i>
            <p>ogunbayooba@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='con4'>
        <div>
          <h3>Get in Touch</h3>
          <p>Feel free to drop us a line below !</p>
        </div>
        <div class="mb-3">
          {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name"></input>
        </div>
        <div class="mb-3">
          {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email"></input>
        </div>
        <div class="mb-3">
          {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Phone Number"></input>
        </div>
        <div class="mb-3">
          {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Request"></input>
        </div>
        <button>send</button>
      </div>
      </div>
    </div>
  )
}

export default Contactus