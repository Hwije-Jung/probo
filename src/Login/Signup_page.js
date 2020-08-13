import React from 'react';
import './Signup_page.css';
import Logo from './pp.png';

class Signup_page extends React.Component {





    render() {
        
        

        return (

            <div className="login_content">
                {/* 
            <img src={Logo} width="70" style={{marginLeft: '5px'}}/> */}

                <h1 className="signup_text" style={{ fontSize: '17pt' }}>회원 가입</h1>
                <div className="inputboxz">
                    <form>
                        <div className="id_box">
                            <div className="text_">ID &nbsp;</div>
                            <input type="text" name="ID" className="idinput" />
                        </div>

                        <div className="pw_box">
                            <div className="text_">비밀번호</div>
                            <input type="password" name="비밀번호" className="idinput" />
                        </div>

                        <div className="pw_box">
                            <div className="text_">비밀번호 확인</div>
                            <input type="password" className="idinput" />
                        </div>

                        <div className="pw_box">
                            <div className="text_">이메일</div>
                            <input type="text" name="이메일" className="idinput" />
                        </div>


                        <div className="pw_box">
                           
                            <input type='submit' value='전송' className="Signup_Button"></input>
                            <div style={{ fontSize: '10pt', marginRight: '0pt', paddingTop: '13px' }}>이메일 확인 후 인증번호를 입력해 주세요</div>

                        </div>

                        <div className="pw_box" style={{ marginTop: '20`px' }}>
                            <div className="text_" >인증번호</div>
                            <input type="text" name="인증번호" className="idinput" />
                        </div>

                        <div className="pw_box" style={{ marginTop: '20`px' }}>
                            <div className="text_" >닉네임</div>
                            <input type="text" name="닉네임" className="idinput" />
                        </div>


                        {/* <div className="pw_box">
                        <div className="text_" >성 별</div>
                        <div style={{ marginLeft: "10px" }}>남자</div> <input type="radio" name="gender" value="male" style={{ marginRight: "20pt", marginTop: "6px" ,cursor:"pointer" }} checked />
                        <div>여자</div> <input type="radio" name="gender" value="female" style={{ marginTop: "6px",cursor:"pointer" }} />

                    </div>

                    <div className="pw_box">
                    <div className="text_" style={{marginRight:"-25px"}}>나 이</div>
                        <select name="age" className="signup_select">
                        
                            <option value="10age" >10대</option>
                            <option value="20age" >20대</option>
                            <option value="30age" >30대</option>
                            <option value="40age" >40대</option>
                            <option value="50age" >50대</option>
                        </select>

                    </div> */}

                        <input type='submit' value='확인' className="Signup_Button_finish"></input>



                        {/* <div className="bottom_text">
                    <a href="#none" style={{textDecoration: 'none'}}>회원 가입</a>

                    <a href="#none" style={{textDecoration: 'none'}} className="bottom_text_search">ID/비밀번호 찾기</a>
                </div> */}


                    </form>
                </div>
            </div>
        )
    }
}

export default Signup_page