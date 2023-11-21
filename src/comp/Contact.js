import React, { useEffect, useRef, useState } from 'react'
import '../App.scss'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [resetText, setResetText] = useState('');
    const [comment, setComment] = useState([]);
    const bottom = useRef();
    const [commentLength,setCommentLength] = useState('');

    const scrollBottom = () => {
        bottom.current.scrollTop = bottom.current.scrollHeight;

    }


    const commentSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const objData = Object.fromEntries(formData);
        // await axios.get(`http://localhost:3050/logincomment?text=${objData.text}`).then(res=>{
        await axios.post(`https://port-0-portfolioserver-3szcb0g2blozeh8s7.sel5.cloudtype.app/postcomment`, objData);
        commentLoading();
        setResetText('');
        console.log(comment.length);
        setCommentLength(comment.length);
    }
    

    const commentLoading = async () => {
        await axios.get('https://port-0-portfolioserver-3szcb0g2blozeh8s7.sel5.cloudtype.app/getcomment')
            .then(res => {
                setComment(res.data)
            })
    }


    useEffect(() => {
            scrollBottom();
    }, [comment]);

    useEffect(() => {
        commentLoading();
    }, [])


    return (
        <div id='contact' className='contactBox'>
            <p className='title'>CONTACT</p>
            <div className='contactCon'>
                <div className='left'>
                    <div data-aos="fade-up" data-aos-duration="2000" className='card'>
                        <div className='logo'>
                            <img src='/imgs/logo.svg'></img>
                        </div>
                        <p className='c'>
                            <span className='person'>정용훈</span>
                            <span className='phone'>010 - 2822 - 0861</span>
                            <a href="mailto:jyh7690861@naver.com" className='mail'>jyh7690861@naver.com</a>
                            <a href='https://github.com/yonghoon1013' target='_blank' className='github'>https://github.com/yonghoon1013</a>
                        </p>
                    </div>
                </div>

                <div className='right'  data-aos="fade-up" data-aos-duration="2000">
                    <p>후기를 남겨주세요</p>
                    <div ref={bottom} className='commentBox'>
                        {
                            comment.map((item, k) => (
                                <p key={k}>{item.text}</p>
                            ))
                        }
                    </div>

                    <form className='txtBox' onSubmit={(e) => { commentSubmit(e) }}>
                        <input type='text' required  name='text' value={resetText} onChange={(e) => setResetText(e.target.value)}></input>
                        <button>입력</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact