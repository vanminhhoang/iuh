import React, {useState} from 'react';
import '../css/HeaderCss/Login.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import firebase from '../js/firebase';



function Login (props) {
    const [valueP, setValueP] = useState("");

    const CheckPhone = (valueP) => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        //Nếu sdt ko đúng định dạng
        if(!vnf_regex.test(valueP)) {
            props.setStyleSM({...props.styleSM, display: "flex"});
            return ;
        }

        //Kiểm tra số điẹn thoại đã được dăng kí chưa
        const url = "http://18.222.220.226:3000/account/login";
        var body = {
            account: valueP,
            pass: ""
        };

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
            if (result.account) {
                console.log("Tai khoan da duoc dang ki");
                //Chuyển qua màn hình đăng nhập mật khẩu
                props.setStyleInputPass({...props.styleInputPass, display: "flex"});
                props.setStyleLogin({...props.styleLogin, display: "none"});
            } else {
                console.log("Tai khoan chua duoc dang ki");

                const numberPhone = valueP.replace(valueP[0], "+84");
                console.log(numberPhone);

                let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container", {size: "invisible"}); 
                
                // Gửi mã firebase sms
                let firebaseAuth = firebase.auth().signInWithPhoneNumber(numberPhone,recaptcha);
                console.log(firebaseAuth);
                props.setFirebasePhone(firebaseAuth);
                props.setStyleLogin({...props.styleLogin, display: "none"});
                props.setStyleAuth({...props.styleAuth, display: "flex"});
            }
        })
        .catch(error => console.error("Error: ", error))
        props.setValueNum(valueP);

    }

    return (
        <div style={props.styleLogin} className="login-container">
            <button type="button" className="btn-close" onClick={() => {
                props.setStyleBGLogin({...props.styleBGLogin, display: "none"});
            }}>+</button>
            <div className="div-input-container">
                <div className="div-img">
                    <img src={icon_main_iuh} alt="IUH"/>
                </div>
                <div class="div-label-text">Xin chào IUHer!</div>
                <div class="div-label-sdt">Số điện thoại</div>
                <div class="div-input">
                    <span class="text-phone">+84</span>
                    <input value={valueP} onChange={(e) => setValueP(e.target.value)} className="input-phone-number" autocomplete="off" name="phone" placeholder="0833963029"/>
                </div>
                <button class="btn-next" onClick={() => CheckPhone(valueP)}>Tiếp tục</button>
                <div id="recaptcha-container"></div>
            </div>
        </div>
    );
}

export default React.memo(Login);