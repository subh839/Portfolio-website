import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I’m <span>Subhasish Halder</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Compititive Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am subhasish .An Engineering Student of UEMK. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            <div className="social">
            <span>
                <Typewriter words={[" CONNECT WITH", "ME"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
              <br/>
                  <a href='https://m.facebook.com/100064734805471/'  className="fb">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <br/>
                  <a href='https://www.linkedin.com/in/subhasish-halder-173a86201'  className="lkdin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <br/>
                  <a href='https://mobile.twitter.com/Subhasi72351305'  className="insta">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <br/>
                  <a href='https://github.com/subh839'  className="git">
                    <i className="fa fa-github"></i>
                  </a>
                  <br/>
                  <p>Send a Mail: @</p>
                  <p>subhasishhalder107@gmail.com</p>
                  

 </div>
            <div className='hero_btn d_flex'>
              
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home