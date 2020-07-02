import React, {useState, useEffect} from 'react';
import '../css/HeaderCss/Password.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import showPass from '../../img/uEA19-eye.svg';
import hiddenPass from '../../img/uEA17-eye-slash.svg';


function Password (props) {

    const [displayIconLoading, setDisplayIconLoading] = useState({
        display: "none",
        animation: ""
    });

    const [showPassword, setShowPassword] = useState({
        show: false,
        type: "password"
    });

    const [showPasswordAgain, setshowPasswordAgain] = useState({
        show: false,
        type: "password"
    });

    const [valuePass, setValuePass] = useState("");

    const [valuePassAgain, setValuePassAgain] = useState("");

    useEffect(() => {
        props.setTextCreatePassAgain("Đăng ký tài khoản mới");
    }, []);

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

        //Show icon loadding
        setDisplayIconLoading({...displayIconLoading, display: "block", animation: "anim-rotate-loading 0.5s ease-in-out infinite reverse"});

        if(!props.checkAccountUserExist) {
            props.setValuePassDK(valuePass);
            props.setStyleInfo({...props.styleInfo, display: "flex"});
            props.setStylePass({...props.stylePass, display: "none"});
              
            //hidden loadding
            setDisplayIconLoading({...displayIconLoading, display: "none"});
        } 
        //Nếu tài khoản có rồi thì cập nhật mật khẩu
        else {
            const urlUpdatePass = "http://ec2-18-222-220-226.us-east-2.compute.amazonaws.com:3000/account/updatepass";
              
            var updatePass = {
                id: props.valuePhone,
                pass: valuePass
            };

            var optionFetch = {
                method: "POST",
                body: JSON.stringify(updatePass),
                headers: {
                    "Content-Type": "application/json"
                }
            };

            // fetch(url,optionFetch)
            // .then(response => response.json())
            // .then(result => {
            //     console.log(result);

            //     //hidden loadding
            //     setDisplayIconLoading({...displayIconLoading, display: "none"});
            // })
        
        }
    }
    
    return (
        <div style={props.stylePass} className="pass-container">
            <svg style={displayIconLoading} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-spinner-third fa-w-16 fa-3x"><g className="fa-group"><path fill="black" d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="fa-secondary"></path><path fill="transparent" d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"></path></g></svg>
            <div className="div-input-pass">
                <div className="div-logo">
                    <img src={icon_main_iuh}/>
                </div>
                <div className="div-text-dk">{props.textCreatePassAgain}</div>
                <div className="div-text-create-pass">Tạo mật khẩu mới tối thiểu 8 ký tự, bao gồm cả chữ và số</div>
                <form className="form-input">
                    <div className="div-create-password">
                        <input type={showPassword.show == false ? "password" : "text"} placeholder="Mật khẩu" onChange={(e) => setValuePass(e.target.value)}/><img className="icon-show-hide-password" src={showPassword.show == false ? showPass : hiddenPass} alt="" onClick={() => setShowPassword({...showPassword, show: showPassword.show == false ? true : false, type: showPassword.show == false ? "password" : "text"})} alt=""/>
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

export default React.memo(Password);