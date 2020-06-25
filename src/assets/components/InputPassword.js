import React, {useState} from 'react';
import '../css/HeaderCss/InputPassword.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import showPass from '../../img/uEA19-eye.svg';
import hiddenPass from '../../img/uEA17-eye-slash.svg';

import firebase from '../js/firebase';



function InputPass (props) {
    const [valuePass, setValuePass] = useState("");

    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    function regainPass () {
        console.log("Gửi mã code");
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container", {size: "invisible"}); 
        
        // Gửi mã firebase sms
        let firebaseAuth = firebase.auth().signInWithPhoneNumber(props.valueNum,recaptcha);
        console.log(firebaseAuth);
        props.setFirebasePhone(firebaseAuth);
        props.setStyleInputPass({...props.styleInputPass, display: "none"});
        props.setStyleAuth({...props.styleAuth, display: "flex"});
    }

    function submit (value) {
        const url = "http://18.222.220.226:3000/account/login";
        var body = {
            account: props.valueNum,
            pass: value
        };

        console.log(body);

        var option = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, option)
        .then(response => response.json())
        .then(result => {
            //Trả về object reponse true/false
            console.log(result);
            if (result.account && result.Status) {
                console.log("Đăng nhập thành công");
                
            } else {
                console.log("Đăng nhập thất bại");
            }
        })
        .catch(error => console.error("Error: ", error))
    }

    return (
        <div style={props.styleInputPass} className="inputpass-container">
            <div className="inputpass">
                <div className="div-logo">
                    <img src={icon_main_iuh} alt=""/>
                </div>
                <h3>Chào mừng bạn trở lại!</h3>
                <div className="div-create-password">
                    <input type={showPassword.show == false ? "password" : "text"} placeholder="Mật khẩu của bạn" onChange={(e) => setValuePass(e.target.value)}/><img className="icon-show-hide-password" src={showPassword.show == false ? showPass : hiddenPass} alt="" onClick={() => setShowPassword({...showPassword, show: showPassword.show == false ? true : false, type: showPassword.show == false ? "password" : "text"})} alt=""/>
                </div>
                <button type="button" className="btn-login" onClick={() => submit(valuePass)}>Đăng nhập</button>
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