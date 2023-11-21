import React from 'react'
import '../App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {


    return (
        <section id='about' className='aboutBox'>
            <div className='aboutTitle' data-aos="fade-up" data-aos-duration="1000">
                <span>Front-End</span>
                <h2 className='myName'>Jung Yong Hoon</h2>
            </div>
            <div className='aboutCon'>
                <div className='left' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <p className='a'>
                        안녕하세요 항상 노력하고 배우며 새로운<br/>
                        시선으로 접근하는 <span>프론트엔드 정용훈</span>입니다.
                    </p>

                    <p className='b'>
                        안녕하세요 소개 간단히 줄르르를극 안녕하세요 소개 간단히 줄르르를극 안녕요 소개 간단히 줄르르를극안녕하세요 소개 간단히 줄르르를극 안녕하세요 소개 간단
                    </p>
                </div>
                <div className='right' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" >
                    <div className='myBox'>
                        <img src='/imgs/yh.jpg'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About