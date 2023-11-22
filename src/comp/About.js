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
                <div className='left'>
                    <p className='a' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        안녕하세요 항상 노력하고 배우며 새로운
                        시선으로 접근하는 <span>프론트엔드 개발자 정용훈</span>입니다.
                    </p>

                    <p className='b' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                    항상 기본을 중요시하고 함께 일하는 동료들과의 협업을 통해 성장하고<br/>
                    그 과정에서 다양한 경험과 지식을 쌓아 가면서<br/>
                    더 나은 프론트엔드 개발자가 되도록 노력하고 있습니다.
                    </p>
                </div>
                <div className='right' data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                    <div className='myBox'>
                        <img src='/imgs/yh.jpg'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About