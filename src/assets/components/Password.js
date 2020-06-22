import React, {useState} from 'react';
import '../css/HeaderCss/Password.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import showPass from '../../img/uEA19-eye.svg';
import hiddenPass from '../../img/uEA17-eye-slash.svg';


function Password (props) {
    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    const [showPasswordAgain, setshowPasswordAgain] = useState({
        show: false,
        type: "password"
    });

    const [valuePass, setValuePass] = useState("");
    console.log(valuePass);

    const [valuePassAgain, setValuePassAgain] = useState("");
    console.log(valuePassAgain);


    function checkPassword () {
        console.log("Check password");
        //kiểm tra pass có trên 8 kí tự, bao gồm cả chữ và số
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!(regex.test(valuePassAgain) && valuePass === valuePassAgain)) {
            console.log("Sai");
            props.setStyleSME({...props.styleSME, display: "flex"});
            props.setValueMsg("Mật khẩu tối thiểu 8 kí tự, bao gồm cả chữ và số!");
            return;
        }

        props.setStyleInfo({...props.styleInfo, display: "flex"});
        props.setStylePass({...props.stylePass, display: "none"});
    }
    
    return (
        <div style={props.stylePass} className="pass-container">
            <div className="div-input-pass">
                <div className="div-logo">
                    <img src={icon_main_iuh}/>
                </div>
                <div className="div-text-dk">Đăng ký tài khoản mới</div>
                <div className="div-text-create-pass">Tạo mật khẩu mới tối thiểu 8 ký tự, bao gồm cả chữ và số</div>
                <form className="form-input">
                    <div className="div-create-password">
                        <input className="" type={showPassword.show == false ? "password" : "text"} placeholder="Mật khẩu" onChange={(e) => setValuePass(e.target.value)}/><img className="icon-show-hide-password" src={showPassword.show == false ? showPass : hiddenPass} alt="" onClick={() => setShowPassword({...showPassword, show: showPassword.show == false ? true : false, type: showPassword.show == false ? "password" : "text"})} alt=""/>
                    </div>
                    <div class="div-create-password-again">
                        <input className="" type={showPasswordAgain.show == false ? "password" : "text"} placeholder="Xác nhận mật khẩu" onChange={(e) => setValuePassAgain(e.target.value)}/><img className="icon-show-hide-password" src={showPasswordAgain.show == false ? showPass : hiddenPass} alt="" onClick={() => setshowPasswordAgain({...showPasswordAgain, show: showPasswordAgain.show == false ? true : false, type: showPasswordAgain.show == false ? "password" : "text"})} alt=""/>
                    </div>
                    <button type="button" className="btn-next" onClick={() => checkPassword()}>Tiếp tục</button>
                </form>
                <div className="div-link-dieukhoan">Bằng việc tiếp tục, bạn đồng ý với  
                    <a href="#"> Chính sách bảo mật và Điều khoản sử dụng</a>
                </div>
            </div>
        </div>
    );
}

export default Password;