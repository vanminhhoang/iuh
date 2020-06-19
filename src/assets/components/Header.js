import React, {useState} from 'react';
import '../css/HeaderCss/Header.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';
import firebase from '../js/firebase';


// components
import SearchHeader from './SearchFormHeader';
import CreateAccount from './CreateNewAccount';
import ForgotPassWord from './ForgotYourPassWordHeader';
import Login from './LoginFormHeader';
import LoginPhone from './LoginPhone';


function Header() {
  
  const [displayBackgroundLogin, setdisplayBackgroundLogin] = useState({
    display: ""
  });


  const [styleDisplayLogin, setStyleDisplayLogin] = useState({
    display: "none",
    animation: ""
  });

  const [styleDisplayForgot, setStyleDisplayForgot] = useState({
    display: "none",
    animation: ""
  });

  const [styleDisplayCreate, setStyleDisplayCreate] = useState({
    display: "none",
    animation: ""
  });

  const [styleDisplayLoginPhone, setStyleDisplayLoginPhone] = useState({
      display: "none",
      animation: ""
  });

  const [styleDisplayIconLogin, setStyleDisplayIconLogin] = useState({
    display: "none"
  });

  const [styleDisplayTextLogin, setStyleDisplayTextLogin] = useState({
    display: "block"
  });

  const logoutUser = () => {
    firebase.auth().signOut().then(function() {
      console.log("Đăng xuất thành công");
      setStyleDisplayIconLogin({...styleDisplayIconLogin, display: "none"});
      setStyleDisplayTextLogin({...styleDisplayTextLogin, display: "block"});
    }).catch(function(error) {
      console.log("Đăng xuất thất bại: " + error)
    });
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
              <button style={styleDisplayTextLogin} type="button"><a href="#" onClick={() => {
                setdisplayBackgroundLogin({...displayBackgroundLogin, display: "flex"});
                setStyleDisplayLogin({...styleDisplayLogin, display: "flex", animation: "anim 0.5s"});
              }}>Đăng nhập</a></button>
              <svg style={styleDisplayIconLogin} id="icon-user" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
              <ul>  
                <li onClick={logoutUser}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
                  <p>Đăng Xuất</p>
                </li>         
              </ul>              
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
        <Login styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}
        styleLoginPhone={styleDisplayLoginPhone} setStyleLoginPhone={setStyleDisplayLoginPhone}/>
        <CreateAccount styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}
        styleLoginPhone={styleDisplayLoginPhone} setStyleLoginPhone={setStyleDisplayLoginPhone}/>
        <ForgotPassWord styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}
        styleLoginPhone={styleDisplayLoginPhone} setStyleLoginPhone={setStyleDisplayLoginPhone}/>
        <LoginPhone styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}
        styleLoginPhone={styleDisplayLoginPhone} setStyleLoginPhone={setStyleDisplayLoginPhone}
        styleIconLogin={styleDisplayIconLogin} setStyleIconLogin={setStyleDisplayIconLogin}
        styleTextLogin={styleDisplayTextLogin} setStyleTextLogin={setStyleDisplayTextLogin}/>
      </div>
    </header>  
  );
}
export default Header;