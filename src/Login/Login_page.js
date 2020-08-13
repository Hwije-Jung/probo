import React from 'react';
import './Login_page.css';
import Appbar from '../Appbar/appbar';
import Logo from './pp.png'
import Search_button from './Search_button';
import Signup_button from './Signup_button';

class Longin extends React.Component {
    render() {
        return (
    
                <div className="login_content">

                    <img src={Logo} width="70" style={{marginLeft: '5px'}}/>

                    <h1 className="login_text">Login</h1>
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

                        <input type='submit' value='확인' className="login_Button_finish"></input>

                        </form>

                        <div className="bottom_text">
                        

                            <Signup_button/>
                            <Search_button/>
                        </div>

                        
                        
                    </div>

                </div>
        )
    }
}

export default Longin