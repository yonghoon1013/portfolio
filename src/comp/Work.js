import React, { useEffect, useRef, useState } from 'react'
import '../App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectData from '../json/project.json';

function Work() {
    const ulRef = useRef(null);
    const liRef = useRef([]);
    const imgRef = useRef([]);

    const elLi = () =>{
        if(liRef.current.length > 4){
            liRef.current.forEach((i,k)=>{
                i.addEventListener('mouseover', () => liMouseOver(k));
                i.addEventListener('mouseout', () => liMouseOut());
            })
            ulRef.current.style.overflowY = 'auto';
            ulRef.current.style.maxHeight = '540px';
            if (window.matchMedia("(max-width: 720px)").matches) {
                ulRef.current.style.maxHeight = '210px';
              }
        }
    }

    const liMouseOver = (k) => {

        if(k !== undefined){
            imgRef.current.forEach((v,imgK)=>{
                v.style.opacity = imgK === k ? "1": "0";
            })
        }

        if(k !== undefined){
            liRef.current.forEach((v,liK)=>{
                v.style.opacity = liK === k ? "1": "0.5";
                v.style.fontWeight = liK === k ? "bold": "normal";
            })
        }

    };

    const liMouseOut = () => {

        imgRef.current.forEach((v,k) => {
            v.style.opacity = '0';
        });
        liRef.current.forEach((v,k) => {
            v.style.opacity = '0.5';
            v.style.fontWeight = 'normal';
        });

        imgRef.current[0].style.opacity = '1';
        liRef.current[0].style.opacity = '1';
        liRef.current[0].style.fontWeight = 'bold';
    };


    useEffect(() => {
        elLi();
        liMouseOver();
        liMouseOut();

    }, []);

    return (
        <section id='project' className='workBox'>
            <p className='title'>Work</p>
            <div className='workCon'>
                <div className='left' data-aos="fade-up" data-aos-duration="1000">
                    <div className='subTitleBox'>
                        <p className='subTitle'>PROJCET</p>
                        <p className='num'>{projectData.project.length}</p>
                    </div>
                    <ul ref={ulRef}>
                        {
                            projectData.project.map((item,k) => (
                                <li key={item.num} ref={(el) => (liRef.current[k] = el)}>
                                    <p className='date'>{item.date}</p>
                                    <div className='projectTitle'>{item.name}
                                        <p>
                                            <a className='webLink' href={item.link} target="_blank"></a>
                                            <a className='gitLink' href={item.github} target="_blank"></a>
                                        </p>
                                        {/* <img src='/imgs/internet.svg'></img> */}
                                    </div>
                                    <p className='lang'>{item.lang}</p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {/* data-aos="zoom-in" data-aos-duration="1000" */}
                <div className='right' >
                    <div className='qwe'>
                            {
                                projectData.project.map((i,k)=>(
                                    <div key={k}>
                                        <img ref={(el) => (imgRef.current[k] = el)} src={i.img}></img>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work