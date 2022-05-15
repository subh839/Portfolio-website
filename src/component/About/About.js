import React, { useState } from "react"

import "./Contact.css"
const About = () => {
 
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>About Myself</h4>
            <h1>About Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                
                <div className='details'>
                  <h1>Subhasish Halder</h1>
                  <p>B-Tech,CST</p>
                  <p>I am available for work. Connect with me via mail and call in to my account.</p> <br />
                  <p>Phone: +91 9330451798</p>
                  <p>Email: subhasishhalder107@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="social">
                  <a href='#'  className="fb">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <br/>
                  <a href='#'  className="lkdin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <br/>
                  <a href='#'  className="insta">
                    <i className="fa fa-instagram"></i>
                  </a>
                  </div>
                  
                </div>
        
              </div>
            </div>
            <div className='right box_shodow'>
            <div className='details'>
                  <h1>Subhasish Halder</h1>
                  <p>Compititive Coder and DSA problem solver.</p>
                  <p>Do compititive coding using c++</p> <br />
                  
                  <p>Google Kicksart -- Global Rank-4321 --</p> <br />
                  <p>Snackdown qualifier</p><br />
                  <p>Google Hashcode qualifier</p>
                  <p>Leetcode 200+ problems</p>
                </div>
            </div>
          </div>
<br/>
          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
               
                <div className='details'>
                
                  <h1>Open Source Contributer</h1>
                  <p>Do Open Source Contribution in projrct.</p> <br />
                  <p>Participates in Hackathon and buildig Projects</p>
                </div>
                </div>
              </div>
              </div>
              
          </div>
      </section>
    </>
  )
}

export default About 