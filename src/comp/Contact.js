import React, { useEffect, useRef, useState } from 'react'
import '../App.scss'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const [resetText, setResetText] = useState('');
    const [resetUpdateText, setResetUpdateText] = useState('');
    const [resetPassword, setResetPassword] = useState('');
    const [comment, setComment] = useState([]);
    const bottom = useRef();
    const [commentLength, setCommentLength] = useState('');
    const [close,setClose] = useState(false);
    const [editNum,setEditNum] = useState(null);

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
        console.log(objData);
        setCommentLength(comment.length);
    }
    
    const commentUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const objData = Object.fromEntries(formData); 
        await axios.put(`https://port-0-portfolioserver-3szcb0g2blozeh8s7.sel5.cloudtype.app/updatecomment/${editNum}`, objData)
        .then(res=>{
            if(res.data.success){
                commentLoading();
                setResetPassword('');
                setResetUpdateText('');
                setClose(false);
            }else{
                alert(res.data.message);
            }
        })
        
    }

    const edit = (num) =>{
        setEditNum(num);
        setClose(true)
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

                <div className='right' data-aos="fade-up" data-aos-duration="2000">
                    <p>후기를 남겨주세요</p>
                    <ul ref={bottom} className='commentBox'>
                        {
                            comment.map((item, k) => (
                                <li key={k}>
                                    <p className='userId'>{item.id}</p>
                                    <div className='commentList'>
                                        <p className='comment'>{item.text}</p>
                                        <button onClick={()=> edit(item.num)}>수정</button>
                                        <button>삭제</button>
                                    </div>
                                </li>
                            ))
                        }
                        <div className={`updateBox ${close ? 'on' : 'off'}`}>
                            <div>
                            <div onClick={()=>{setClose(false);setResetPassword('');setResetUpdateText('');}} className='close'>X</div>
                            <form onSubmit={(e) => {commentUpdate(e)}} className='updateForm'>
                                <div className='pp'>
                                    <div>
                                        <span>비밀번호</span><input type='password' value={resetPassword} onChange={(e) => setResetPassword(e.target.value)} required name='password'></input>
                                    </div>
                                    <input type='text' value={resetUpdateText} onChange={(e) => setResetUpdateText(e.target.value)} required name='text' placeholder='수정할 내용을 입력해 주세요!'></input>
                                    <button>수정</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </ul>

                    <form className='txtBox' onSubmit={(e) => { commentSubmit(e) }}>
                        <div className='uu'>
                            <div className='vv'>
                                <span>아이디</span><input type='id' name='id' required ></input>
                                <span>비밀번호</span><input type='password' required name='password' ></input>
                            </div>
                            <input type='text' required name='text' value={resetText} onChange={(e) => setResetText(e.target.value)}></input>
                        </div>
                        <button>입력</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact