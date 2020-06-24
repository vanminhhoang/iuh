import React, {useState} from 'react';
import '../css/HeaderCss/InputPassword.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import showPass from '../../img/uEA19-eye.svg';
import hiddenPass from '../../img/uEA17-eye-slash.svg';

import firebase from '../js/firebase';



function InputPass (props) {

    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    function regainPass () {

        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container", {size: "invisible"}); 
        
        // Gửi mã firebase sms
        let firebaseAuth = firebase.auth().signInWithPhoneNumber(props.valueNum,recaptcha);
        console.log(firebaseAuth);
        props.setFirebasePhone(firebaseAuth);
        props.setStyleInputPass({...props.styleInputPass, display: "none"});
        props.setStyleAuth({...props.styleAuth, display: "flex"});
    }

    return (
        <div style={props.styleInputPass} className="inputpass-container">
            <div className="inputpass">
                <div className="div-logo">
                    <img src={icon_main_iuh} alt=""/>
                </div>
                <h3>Chào mừng bạn trở lại!</h3>
                <div className="div-create-password">
                    <input type={showPassword.show == false ? "password" : "text"} placeholder="Mật khẩu của bạn" /><img className="icon-show-hide-password" src={showPassword.show == false ? showPass : hiddenPass} alt="" onClick={() => setShowPassword({...showPassword, show: showPassword.show == false ? true : false, type: showPassword.show == false ? "password" : "text"})} alt=""/>
                </div>
                <button type="button" className="btn-login" >Đăng nhập</button>
                <div className="div-option">
                    <span onClick={() => {
                        props.setStyleLogin({...props.styleLogin, display: "flex"});
                        props.setStyleInputPass({...props.styleInputPass, display: "none"});
                    }}>Dùng số điện thoại khác</span>
                    <span onClick={() => regainPass()}>Quên mật khẩu</span>
                </div>
                <div className="recaptcha-container"></div>
            </div>
        </div>
    );
}

export default React.memo(InputPass);