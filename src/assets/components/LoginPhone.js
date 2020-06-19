import React, {useState} from 'react';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import '../css/HeaderCss/LoginPhone.css';
import firebase from '../js/firebase';

function LoginPhoneNumber(props) {

    const [valuePhone, setValuePhone] = useState("");
    console.log(valuePhone); 

    const [textVerify, setTextVerify] = useState({
        text: "By tapping Verify, an SMS may be sent. Message & data rates may apply.",
        color: ""
    });


    const Login = (value) => {
        alert("connect");
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        let number = "+84";
        number += value;
        console.log(number);
        
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(confirmationResult){
            console.log("xác nhận mã recaptcha");

            let code = prompt("Vui Lòng Nhập Mã OTP", "");
            console.log(code);
            
            if (code == null) {
                console.log("Chưa xác nhận đc mã code");
                return;
            }
        
            confirmationResult.confirm(code).then(function(result){
                props.setStyleBG({...props.styleBG, display: "none"});
                props.setStyleTextLogin({...props.styleTextLogin, display: "none"});
                props.setStyleIconLogin({...props.styleIconLogin, display: "block"});
                console.log(result.user, "user");
                console.log(result.user.phoneNumber + " number");
        
            }).catch((err) => {
                console.log("SMS not sent: " + err);
                setTextVerify({...textVerify, text: "We have blocked all requests from this device due to unusual activity. Try again later.", color: "red"});
            })
        
        })
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Đã đăng nhập");
            // props.setStyleTextLogin({...props.styleTextLogin, display: "none"});
            // props.setStyleIconLogin({...props.styleIconLogin, display: "block"});
        } else {
            console.log("Đã đăng xuất");
            // props.setStyleTextLogin({...props.styleTextLogin, display: "block"})
            // props.setStyleIconLogin({...props.styleIconLogin, display: "none"});
        }
    });

    return (
        <div style={props.styleLoginPhone} className="app-div-login-phone">
            <button class="btn-closelogin"><a href="#" onClick={() => {
              props.setStyleBG({...props.styleBG, display: "none"});
              props.setStyleLogin({...props.styleLogin, display: "flex"});
              props.setStyleCreate({...props.styleCreate, display: "none"});
              props.setStyleForgot({...props.styleForgot, display: "none"});
              props.setStyleLoginPhone({...props.styleLoginPhone, display: "none"});
              setValuePhone("");
            }}>+</a></button>
            <div className="container-login-phone">
                <div className="app-div-login-phone-section">
                    <img src={icon_main_iuh}  alt=""/>
                    <h3>Enter your phone number</h3>
                    <input value={valuePhone} onChange={e => setValuePhone(e.target.value)} type="number" placeholder="Phone Number (+84)" id="input-phone"/>
                    <div id="recaptcha-container"></div>
                    <div className="div-btn">
                        <button type="button" className="btn-cancel" onClick={() => {
                            props.setStyleLogin({...props.styleLogin, display: "flex"});
                            props.setStyleLoginPhone({...props.styleLoginPhone, display: "none"});
                        }}>CANCEL</button>
                        <button type="button" className="btn-send-verity-code" onClick={() => Login(valuePhone)}>VERITY</button>
                    </div>
                    <p style={{color: textVerify.color}}> {textVerify.text}</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPhoneNumber;