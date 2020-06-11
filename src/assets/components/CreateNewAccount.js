import React from 'react';
import '../css/HeaderCss/CreateNewAccount.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';

function CreateAccount(props) {
    return (
        <form style={props.s} className="app-div-create">
            <img src={icon_main_iuh} alt=""/>
            <button class="btn-closelogin"><a href="#">+</a></button>
            <h2>ĐĂNG KÍ</h2>
            <div className="div-create">
                <div className="create-left">
                    <input type="text" placeholder="Họ và tên"/>
                    <input type="text" placeholder="Email"/>
                    <input type="number" placeholder="Số điện thoại"/>
                </div>

                <div className="create-right">
                    <input type="text" placeholder="Tên đăng nhập"/>
                    <input type="password" placeholder="Mật khẩu"/>
                    <input type="password" placeholder="Nhập lại mật khẩu"/>
                </div>
            </div>
            <button type="button" className="btn-dangki"><a href="#"><div>ĐĂNG KÍ</div></a></button>
        </form>
    );
}

export default CreateAccount;