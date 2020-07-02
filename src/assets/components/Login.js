import React, {useState} from 'react';
import '../css/HeaderCss/Login.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import firebase from '../js/firebase';



function Login (props) {
    const [valueP, setValueP] = useState("");

    const [displayIconLoading, setDisplayIconLoading] = useState({
        display: "none",
        animation: ""
    });

    const CheckPhone = (valueP) => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        //Nếu sdt ko đúng định dạng
        if(!vnf_regex.test(valueP)) {
            props.setStyleSM({...props.styleSM, display: "flex"});
            props.setValueMsg("Số điện thoại không hợp lệ, vui lòng nhập lại một số điện thoại gồm 10 số!")
            return ;
        }

        //Show icon loadding
        setDisplayIconLoading({...displayIconLoading, display: "block", animation: "anim-rotate-loading 0.5s ease-in-out infinite reverse"});
        
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
        .then(response => {
            return response.json();
        })
        .then(result => {
            //Trả về object reponse true/false
            if (result.account) {
                console.log("Tai khoan da duoc dang ki");
                //Chuyển qua màn hình đăng nhập mật khẩu
                props.setStyleInputPass({...props.styleInputPass, display: "flex"});
                props.setStyleLogin({...props.styleLogin, display: "none"});
                props.setCheckAccountUserExist(true);

                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
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
                props.setCount(120);
                props.setCheckAccountUserExist(false);

                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
            }
        })
        .catch(error => console.error("Error: ", error))
        props.setValueNum(valueP);

    }

    return (
        <div style={props.styleLogin} className="login-container">
            <svg style={displayIconLoading} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-spinner-third fa-w-16 fa-3x"><g className="fa-group"><path fill="black" d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="fa-secondary"></path><path fill="transparent" d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"></path></g></svg>
            <button type="button" className="btn-close" onClick={() => {
                props.setStyleBGLogin({...props.styleBGLogin, display: "none"});
            }}>+</button>
            <div className="div-input-container">
                <div className="div-img">
                    <img src={icon_main_iuh} alt="IUH"/>
                </div>
                <div className="div-label-text">Xin chào IUHer!</div>
                <div className="div-label-sdt">Số điện thoại</div>
                <div className="div-input">
                    <span className="text-phone">+84</span>
                    <input value={valueP} onChange={(e) => setValueP(e.target.value)} className="input-phone-number" autocomplete="off" name="phone" placeholder="Your Phone!"/>
                </div>
                <button className="btn-next" onClick={() => CheckPhone(valueP)}>Tiếp tục</button>
                <div id="recaptcha-container"></div>
            </div>
        </div>
    );
}

export default React.memo(Login);