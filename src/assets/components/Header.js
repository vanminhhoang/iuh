import React, { useState, useEffect } from 'react';
import '../css/HeaderCss/Header.css';
import '../css/HeaderCss/LoginFormHeader.css';
import '../css/HeaderCss/ForgotYourPassWord.css';
import '../css/HeaderCss/CreateNewAccount.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';

// components
import SearchHeader from './SearchFormHeader';
// import CreateAccount from './CreateNewAccount';
// import ForgotPassWord from './ForgotYourPassWordHeader';
// import Login from './LoginFormHeader';


// if (window.fetch) {
//   const urlAPI = "http://ec2-18-222-220-226.us-east-2.compute.amazonaws.com:3000/web/event";

//   fetch(urlAPI) 
//       .then(response => response.json())
//       .then(result => {
//         localStorage.setItem("image",JSON.stringify(result));
//         var img = localStorage.getItem("image");
//         img = JSON.parse(img);
//         img = img.data;
//         // console.log(img);
//         var arrLength = img.length;
//         for (var i = 0; i < arrLength; ++i) {
//           console.log(img[i].image);
//         }
        
//         // console.log(img);
//       })
    
//       .catch(error => console.log(error));
// } else {
//   console.log("Fetch not found");
// }








function Header() {
  
  const [displayBackgroundLogin, setdisplayBackgroundLogin] = useState({
    display: ""
  });


  const [styleDisplayLogin, setStyleDisplayLogin] = useState({
    display: "none",
    transform: "translateY(-200%)",
    transition: ""
  })

  const [styleDisplayForgot, setStyleDisplayForgot] = useState({
    display: "none"
  })

  const [styleDisplayCreate, setStyleDisplayCreate] = useState({
    display: "none"
  })

  const [myStyle, setMyStyle] = useState({
      display: "",
      transform: "",
      transition: "",
      backgroundColor: ""
  });

  function ForgotYourPassWord(props) {
    return (
        <div style={props.st} className="app-div-forgot">
            <img src={icon_main_iuh} alt=""/>
            <button class="btn-closelogin" onClick={() => {
              setdisplayBackgroundLogin({...displayBackgroundLogin, display: "none"});
              setStyleDisplayLogin({...styleDisplayLogin, display: "flex"});
              setStyleDisplayCreate({...styleDisplayCreate, display: "none"});
              setStyleDisplayForgot({...styleDisplayForgot, display: "none"});
            }}><a href="#">+</a></button>
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

  function CreateAccount(props) {
    return (
        <form style={props.s} className="app-div-create">
            <img src={icon_main_iuh} alt=""/>
            <button class="btn-closelogin" onClick={() => {
              setdisplayBackgroundLogin({...displayBackgroundLogin, display: "none"});
              setStyleDisplayLogin({...styleDisplayLogin, display: "flex"});
              setStyleDisplayCreate({...styleDisplayCreate, display: "none"});
              setStyleDisplayForgot({...styleDisplayForgot, display: "none"});
            }}><a href="#">+</a></button>
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



  function Login(props) {
    const [showIconModePass, setShowIconModePass] = useState(false);

    return (
        <div style={props.mst} className="app-div-login">
            <div className="div-left">

            </div>   
            <div className="div-right">
                <div className="div-right-login">
                    <img src={icon_main_iuh}  alt=""/>
                    <button class="btn-closelogin"><a href="#" onClick={() => setdisplayBackgroundLogin({
                      ...displayBackgroundLogin, display: "none"
                    })}>+</a></button>
                    <form className="form-login"> 
                        <div className="email">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                            <input type="text" placeholder="E-mail Address"/>   
                        </div>                         
                        <div className="password">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-lock-alt fa-w-14 fa-3x"><path fill="currentColor" d="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z" class=""></path></svg>
                            <input type={props.showIconModePass ? "text" : "password"} placeholder="Password" id="input-password"/>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={() => setShowIconModePass(showIconModePass ? false : true)}><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye-slash" class="svg-inline--fa fa-eye-slash fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path></svg>
                        </div>
                    </form>
                    <div className="submit-login">
                        <a className="link-forgot" href="#" onClick={() => {
                          setStyleDisplayLogin({...styleDisplayLogin, display: "none"});
                          setStyleDisplayForgot({...styleDisplayForgot, display: "flex"});
                      }}>Forgot your password?</a>
                        <button type="button" className="btn-login"><a href="#"><div>LOGIN</div></a></button>
                        <a className="link-create-account" href="#" onClick={() => {
                          setStyleDisplayLogin({...styleDisplayLogin, display: "none"});
                          setStyleDisplayCreate({...styleDisplayCreate, display: "flex"});
                      }}>Create new account</a>
                    </div>
                </div>
            </div>       
        </div>
    );
  }

  return(
    <header className="app-header">
      <section className="app-header__main">
        <nav className="app-header__nav">
          <div className="app-header__nav-div-link-home-page">
            <a className="link" href="#">
              <img src={icon_main_iuh} alt=""/>
              Nhóm sinh viên CNTT
            </a>
          </div>

          <ul className="app-header_nav-link">
            <li className="link-item2">
              <a href="#">Về chúng tôi</a>
            </li>
            <li className="link-item3">
              <a href="#">Liên hệ quảng cáo</a>
            </li>
            <li className="link-item4">
              <button type="button"><a href="#" onClick={() => {
                setdisplayBackgroundLogin({...displayBackgroundLogin, display: "flex"});
                setStyleDisplayLogin({...styleDisplayLogin, display: "flex", transform: "translateY(0%)", transition: "all 2.5s linear"});
              }}>Đăng nhập</a></button>
            </li>
          </ul>

          <div className="app-header__nav-bars">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
            </svg>
          </div>
        </nav>    
      </section>
    
      <SearchHeader/>

      <div style={displayBackgroundLogin} className="div-login">
        <Login mst={styleDisplayLogin}/>
        <CreateAccount s={styleDisplayCreate}/>
        <ForgotYourPassWord st={styleDisplayForgot}/>
      </div>
    </header>  
  );
}
export default Header;