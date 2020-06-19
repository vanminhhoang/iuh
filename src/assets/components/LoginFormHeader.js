import React, {useState} from 'react';
import '../css/HeaderCss/LoginFormHeader.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';



// components
// import ForgotPassWord from './ForgotYourPassWordHeader';
// import CreateAccount from './CreateNewAccount';




    // const [styleCreate, setStyleCreate] = useState({
    //     display: ""
    // });

    // const [styleForgot, setStyleForgot] = useState({
    //     display: ""
    // });


function Login(props) {
    // const [showIconModePass, setShowIconModePass] = useState(false);
    // console.log(showIconModePass);

    const [valueTK, setValueTK] = useState("");
    const [valueMK, setValueMK] = useState("");

    const [showModePass, setShowModePass] = useState("password");
    const [showIconModeText, setShowIconModeText] = useState("block");
    const [showIconModePass, setShowIconModePass] = useState("none");


    return (
        <div style={props.styleLogin} className="app-div-login">
            <div className="div-left">
                
            </div>   
            <div className="div-right">
                <div className="div-right-login">
                    <img src={icon_main_iuh}  alt=""/>
                    <button class="btn-closelogin"><a href="#" onClick={() => {
                        props.setStyleBG({ ...props.styleBG, display: "none"});
                        setValueTK("");
                        setValueMK("");
                    }}>+</a></button>
                    <form className="form-login"> 
                        <div className="email">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                            <input value={valueTK} onChange={(e) => setValueTK(e.target.value)} type="text" placeholder="E-mail Address"/>   
                        </div>                         
                        <div className="password">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-lock-alt fa-w-14 fa-3x"><path fill="currentColor" d="M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z" class=""></path></svg>
                            <input value={valueMK} onChange={(e) => setValueMK(e.target.value)} type={showModePass} placeholder="Password" id="input-password"/>
                            <svg style={{display: showIconModeText}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" onClick={() => {setShowModePass("text"); setShowIconModePass("block"); setShowIconModeText("none")}}><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
                            <svg style={{display: showIconModePass}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye-slash" class="svg-inline--fa fa-eye-slash fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" onClick={() => {setShowModePass("password"); setShowIconModePass("none"); setShowIconModeText("block")}}><path fill="currentColor" d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"></path></svg>
                        </div>
                    </form>
                    <div className="submit-login">
                        <a className="link-forgot" href="#" onClick={() => {
                            props.setStyleLogin({...props.styleLogin, display: "none"});
                            props.setStyleForgot({...props.setStyleForgot, display: "flex", animation: "anim 0.5s"});
                        }}>Forgot your password?</a>
                        <button type="button" className="btn-login"><a href="#"><div>LOGIN</div></a></button>
                        <div className="div-img">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-square-alt" class="svg-inline--fa fa-phone-square-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={() => {props.setStyleLogin({...props.styleLogin, display: "none"}); props.setStyleLoginPhone({...props.styleLoginPhone, display: "flex", animation: "anim 0.5s"});}}><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-square" class="svg-inline--fa fa-google-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"></path></svg>
                        </div>
                        <a className="link-create-account" href="#" onClick={() => {
                            props.setStyleLogin({...props.styleLogin, display: "none"});
                            props.setStyleCreate({...props.styleCreate, display: "flex", animation: "anim 0.5s"});
                        }}>Create new account</a>
                    </div>
                </div>
            </div>       
        </div>
    );
}

export default Login;