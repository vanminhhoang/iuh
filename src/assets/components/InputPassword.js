import React, {useState} from 'react';
import '../css/HeaderCss/InputPassword.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import showPass from '../../img/uEA19-eye.svg';
import hiddenPass from '../../img/uEA17-eye-slash.svg';

import firebase from '../js/firebase';



function InputPass (props) {

    const [displayIconLoading, setDisplayIconLoading] = useState({
        display: "none",
        animation: ""
    });

    const [valuePass, setValuePass] = useState("");

    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    function regainPass () {
        //Show icon loadding
        setDisplayIconLoading({...displayIconLoading, display: "block", animation: "anim-rotate-loading 0.5s ease-in-out infinite reverse"});
        
        console.log("Gửi mã code");
        const numberPhone = props.valueNum.replace(props.valueNum[0], "+84");
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container", {size: "invisible"}); 
        
        // Gửi mã firebase sms
        let firebaseAuth = firebase.auth().signInWithPhoneNumber(numberPhone,recaptcha);
        console.log(firebaseAuth);
        props.setFirebasePhone(firebaseAuth);
        props.setStyleInputPass({...props.styleInputPass, display: "none"});
        props.setStyleAuth({...props.styleAuth, display: "flex"});
        props.setCount(120);

        //hidden loadding
        setDisplayIconLoading({...displayIconLoading, display: "none"});
    }

    function submit (value) {

        //Show icon loadding
        setDisplayIconLoading({...displayIconLoading, display: "block", animation: "anim-rotate-loading 0.5s ease-in-out infinite reverse"});

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

                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
            } else {
                console.log("Đăng nhập thất bại");
                props.setValueMsgErr("Bạn nhập sai mật khẩu!");
                props.setStyleSME({...props.styleSME, display: "flex"});
                
                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
            }
        })
        .catch(error => console.error("Error: ", error))
    }

    return (
        <div style={props.styleInputPass} className="inputpass-container">
            <svg style={displayIconLoading} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-spinner-third fa-w-16 fa-3x"><g className="fa-group"><path fill="black" d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="fa-secondary"></path><path fill="transparent" d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"></path></g></svg>
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
                <div id="recaptcha-container"></div>
            </div>
        </div>
    );
}

export default React.memo(InputPass);