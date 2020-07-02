import React, {useState, useEffect} from 'react';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import '../css/HeaderCss/Authentication.css';
import firebase from '../js/firebase';



function Auth (props) {

    const [displayIconLoading, setDisplayIconLoading] = useState({
        display: "none",
        animation: ""
    });

    const [valueVerifiCode, setValueVerifiCode] = useState("");

    // cout down
    useEffect(() => {
        setTimeout(() => {if (props.count != 0) props.setCount(props.count - 1)}, 1000);
        console.log(props.count);
    }, [props.count]);


    function authCode (VerifiCode) {
        console.log(VerifiCode);

        //Show icon loadding
        setDisplayIconLoading({...displayIconLoading, display: "block", animation: "anim-rotate-loading 0.5s ease-in-out infinite reverse"});

        let firebaseAuth = props.firebasePhone;
        
        firebaseAuth.then(function(confirmationResult){
            console.log("xác nhận mã recaptcha");
        
            confirmationResult.confirm(VerifiCode).then(function(result){
                console.log("Xác nhận mã code thành công");
                console.log(result.user, "user");
                console.log(result.user.phoneNumber + " number");
                props.setStyleAuth({...props.styleAuth, display: "none"});
                props.setStylePass({...props.stylePass, display: "flex"});
                props.setTextCreatePassAgain("Lấy lại mật khẩu");
                props.setCount(0);

                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
            }).catch((err) => {
                console.log("SMS not sent: " + err);

                //hidden loadding
                setDisplayIconLoading({...displayIconLoading, display: "none"});
            })
        })
    }

      
    return (
        <div style={props.styleAuth} className="auth-container">
            <svg style={displayIconLoading} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-spinner-third fa-w-16 fa-3x"><g className="fa-group"><path fill="black" d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="fa-secondary"></path><path fill="transparent" d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"></path></g></svg>
            <div className="div-input-container">
                <div className="div-logo"><img src={icon_main_iuh} alt=""/></div>
                <div className="div-text-registration"> Đăng ký tài khoản mới</div>
                <div className="div-text-sdt">Nhập mã xác thực gồm 6 số được gửi về số điện thoại<strong> {props.valueNum} </strong> của bạn</div>
                <div className="div-input-verity-code">
                    <input onChange={(e) => setValueVerifiCode(e.target.value)} placeholder="------" maxlength="6" className="input-code"></input>
                </div>
                <button type="button" disabled={valueVerifiCode.length == 6 ? false : true} className="btn-submit" onClick={() => {
                    authCode(valueVerifiCode);
                }}>Xác Nhận</button>
                <div className="div-input-code">
                    <a href="#" className="count">Gửi lại mã</a> <span style={{fontSize: "17px"}}> {props.count != 0 ? props.count : ""} </span>
                </div>
                <button className="btn-back" type="button" onClick={() => {
                    props.setStyleLogin({...props.styleLogin, display: "flex"});
                    props.setStyleAuth({...props.styleAuth, display: "none"});
                }}>Dùng số điện thoại khác</button>
                <div className="div-note"><span>Lưu ý:</span> Không chia sẻ mật khẩu và mã xác thực của bạn cho bất kỳ ai</div>
            </div>
        </div>
    );
}

export default React.memo(Auth);