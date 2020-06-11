import React from 'react';
import '../css/HeaderCss/ForgotYourPassWord.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';

function ForgotYourPassWord(props) {
    return (
        <div style={props.st} className="app-div-forgot">
            <img src={icon_main_iuh} alt=""/>
            <button class="btn-closelogin" onClick={() => setdisplayBackgroundLogin({
                      ...displayBackgroundLogin, display: "none"
                    })}><a href="#">+</a></button>
            <h2>ĐĂNG KÍ</h2>
            <h3>Tìm tài khoản của bạn</h3>
            <p>Nhập số điện thoại hoặc email khôi phục</p>
            <form className="form-input-email">
                <input type="text" placeholder="Số điện thoại hoặc email"/>   
            </form>
            <button type="button" className="btn-next"><a href="#"><div>TIẾP THEO</div></a></button>
        </div>
    );
}

export default ForgotYourPassWord;