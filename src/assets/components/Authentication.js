import React, {useState, useEffect} from 'react';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import '../css/HeaderCss/Authentication.css';
import firebase from '../js/firebase';



function Auth (props) {
    const [valueVerifiCode, setValueVerifiCode] = useState("");

    // cout down
    useEffect(() => {
        setTimeout(() => {if (props.count != 0) props.setCount(props.count - 1)}, 1000);
        console.log(props.count);
    }, [props.count]);




    function authCode (VerifiCode) {
        console.log(VerifiCode);

        let firebaseAuth = props.firebasePhone;
        
        firebaseAuth.then(function(confirmationResult){
            console.log("xác nhận mã recaptcha");
        
            confirmationResult.confirm(VerifiCode).then(function(result){
                console.log("Xác nhận mã code thành công");
                console.log(result.user, "user");
                console.log(result.user.phoneNumber + " number");
                props.setStyleAuth({...props.styleAuth, display: "none"});
                props.setStylePass({...props.stylePass, display: "flex"});
            }).catch((err) => {
                console.log("SMS not sent: " + err);
            })
        })
    }

      
    return (
        <div style={props.styleAuth} className="auth-container">
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