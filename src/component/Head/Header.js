import React, { useState } from "react"
import "./header.css"

const Header = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                  
                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            { }
                            <li>
                                <a href='#home'>Home</a>
                            </li>
                            <li>
                                <a href='#resume'>Resume</a>
                            </li>

                            <li>
                                <a href='https://drive.google.com/file/d/1_4uQ-LiYr8lw8FKO7HoDcef6R8z13b_d/view?usp=drivesdk'>Dowload Resume</a>
                            </li>

                            <li>
                                <a href='#About'>About Me</a>
                            </li>

                            <li>
                                <a href='#Contact'>Contact</a>
                            </li>
                            <li>

                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header