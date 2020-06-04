import React from 'react';
import '../css/HeaderCss/Header.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';

function Header() {
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
              <li className="link-item1">
                <a href="#"><div></div></a>
              </li>
              <li className="link-item2">
                <a href="#">Về chúng tôi</a>
              </li>
              <li className="link-item3">
                <a href="#">Liên hệ quảng cáo</a>
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

        <section className="container-form">
          <form action="" className="form-search">
            <input type="text" onChange={(e)=>{console.log(e.target.value);}} placeholder="Enter your search..." id="input-search"/>
            <button className="btn-search" type="button">
              <a href="#" className="link-search">
                <div className="div-link-search">Search</div>
              </a>
            </button>
          </form>
        </section>
              
      </header>
      
            
    );
}
export default Header;