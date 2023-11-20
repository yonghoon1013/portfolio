import React, { useEffect, useState, useRef } from 'react'
import '../App.scss'
import skillData from "../json/skill.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section id='skill' className='skillBox'>
      <p className='title'>SKILL</p>
      <div className='skillCon'>

      {
        skillData.map((category,k) =>(
          <div data-aos="fade-up" data-aos-duration="1000" key={k}>
            <span>{category.category}</span>
          <div>
          <ul>
              {category.items.map((item,k2)=>(
                <li key={k2}>
                  <div className='left'><img src={item.img}></img></div>
                  <div className='right'>{item.comment}</div>
                </li>
              ))}
            </ul>
          </div>
          </div>

        ))
      }
      
      </div>
    </section>
  )
}

export default Skill