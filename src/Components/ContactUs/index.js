import React, { useEffect } from 'react'

import "./index.css"
import Footer from '../Footer'


const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
},[]);


  return (
    <div> 
   <div className='col-11 col-lg-5 rounded-3 border m-auto my-4 text-dark pb-3 p-0 m-0 register-bg pt-5'  data-aos="fade-right"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine">
 
        <h2 className='text-center highlight-lines fw-semibold text-dark-emphasis'>Contact Us</h2>
        <div className='row p-0 m-0 col-12 col-lg-8 m-auto gap-1 rounded-3 py-4 px-2 my-3 contact-form '>
          <label htmlFor="" className="fw-Medium p-0 text-dark-emphasis">
            Name
          </label>
          <input type='text' className="rounded-3 fs-6 p-2  mb-3 mb-md-2" placeholder='Jhon' />
          <label htmlFor="" className="fw-Medium p-0 text-dark-emphasis">
            Mail
          </label>
          <input type='mail' className="rounded-3 fs-6 p-2 mb-3 mb-md-2" placeholder='jhon12@gmail.com' />
          <label htmlFor="" className="fw-Medium p-0 text-dark-emphasis">
            Mobile
          </label>
          <input type='number' className="rounded-3 fs-6 p-2 mb-3 mb-md-2" placeholder='1234567890' />
          <label htmlFor="" className="fw-Medium p-0 text-dark-emphasis">
            Message
          </label>
          <textarea rows="5" className="rounded-3 fs-6 p-2 mb-3 mb-md-2" cols="5" placeholder='Enter Message'></textarea>
          <button
            type="button"
            className="fw-semibold btn text-center text-white highlight-lines fs-6 col-6 col-lg-3 mt-3 m-auto border border-2 rounded-5"
            style={{backgroundColor: "#081735"}}
          >
            Submit
          </button>
        </div>

    
    </div>
    <Footer/>
    </div>
    
  )
}

export default ContactUs
