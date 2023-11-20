import React, { useEffect, useRef, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import '../App.scss'

function Header() {

  const [prevScrollY,setPrevScrollY] = useState('');
  const [scrollY,setScrollY] = useState(true);

  const scrollToSection = (section) => {
    scroll.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };



  
  const scrollEvent = () =>{
    setPrevScrollY(window.pageYOffset)
    if(prevScrollY < window.pageYOffset){
      setScrollY(true)
    } else{
      setScrollY(false)
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll',scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  },[prevScrollY])



  return (
    <div className={`head ${scrollY ? "off" : "on"}`}>
      <ul>
        <li>
          <Link to='about' smooth={true}>
          ABOUT
          </Link>
        </li>
        <li>
          <Link to='skill' smooth={true}>
          SKILL
          </Link>
        </li>
        <li>
          <Link to='project' smooth={true}>
          PROJECT
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header