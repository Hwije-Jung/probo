import React from 'react';
import './Search_ID.css';
import Logo from './pp.png';

class Search_ID extends React.Component {




    render() {
      

        return (

            <div className="login_content">
                {/* 
            <img src={Logo} width="70" style={{marginLeft: '5px'}}/> */}

                <h1 className="search_text" style={{ fontSize: '17pt' }}>ID 찾기</h1>
                <div className="inputboxz">
                    <form>
                        <div className="id_box">
                            <div className="text_">이메일 &nbsp;</div>
                            <input type="text" name="이메일" className="idinput" />
                        </div>

                        <div className="pw_box">
                           
                            <div style={{ fontSize: '10pt', marginLeft: '60px', paddingTop: '13px' }}>이메일에 아이디 받기</div>
                            <input type='submit' value='전송' className="Signup_Button" ></input>
                        </div>

                        <h1 className="searchP_text">비밀번호 찾기</h1>

                        <div className="pw_box">
                            <div className="text_">ID</div>
                            <input type="text" name="ID" className="idinput" />
                        </div>

                        <div className="id_box">
                            <div className="text_">이메일 &nbsp;</div>
                            <input type="text" name="이메일" className="idinput" />
                        </div>


                        <div className="pw_box">
                           
                           <div style={{ fontSize: '10pt', marginLeft: '50px', paddingTop: '13px' }}>이메일에 비밀번호 받기</div>
                           <input type='submit' value='전송' className="Signup_Button" ></input>
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

export default Search_ID