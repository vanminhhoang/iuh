import React, {useState} from 'react';
import '../css/HeaderCss/CreateNewAccount.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';





function CreateAccount(props) {
    const [valueInput, setValueInput] = useState("");

    function submitRegistration () {
        alert(valueInput);
        console.log(valueInput);
    }
    
    
    return (
        <form style={props.styleCreate} className="app-div-create">
            <img src={icon_main_iuh} alt=""/>
            <button class="btn-closelogin" onClick={() => {
              props.setStyleBG({...props.styleBG, display: "none"});
              props.setStyleLogin({...props.styleLogin, display: "flex"});
              props.setStyleCreate({...props.styleCreate, display: "none"});
              props.setStyleForgot({...props.styleForgot, display: "none"});
            }}><a href="#">+</a></button>
            <h2>ĐĂNG KÍ</h2>
            <div className="div-create">
                <div className="create-left">
                    <input value={valueInput} onChange={e => setValueInput(e.target.value)} id="name" type="text" placeholder="Họ và tên"/>
                    <input id="email" type="text" placeholder="Email"/>
                    <input id="sdt" type="number" placeholder="Số điện thoại"/>
                </div>

                <div className="create-right">
                    <input id="tendangnhap" type="text" placeholder="Tên đăng nhập"/>
                    <input id="matkhau" type="password" placeholder="Mật khẩu"/>
                    <input id="matkhauagain" type="password" placeholder="Nhập lại mật khẩu"/>
                </div>
            </div>
            <button type="button" className="btn-dangki"><a href="#" onClick={submitRegistration}><div>ĐĂNG KÍ</div></a></button>
        </form>
    );
}

export default CreateAccount;