import React, {useState} from 'react';
import '../css/HeaderCss/Header.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';

// components
import SearchHeader from './SearchFormHeader';
import CreateAccount from './CreateNewAccount';
import ForgotPassWord from './ForgotYourPassWordHeader';
import Login from './LoginFormHeader';


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
                setStyleDisplayLogin({...styleDisplayLogin, display: "flex", animation: "anim 0.5s"});
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
        <Login styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}/>
        <CreateAccount styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}/>
        <ForgotPassWord styleBG={displayBackgroundLogin} setStyleBG={setdisplayBackgroundLogin}
        styleLogin={styleDisplayLogin} setStyleLogin={setStyleDisplayLogin}
        styleCreate={styleDisplayCreate} setStyleCreate={setStyleDisplayCreate}
        styleForgot={styleDisplayForgot} setStyleForgot={setStyleDisplayForgot}/>
      </div>
    </header>  
  );
}
export default Header;