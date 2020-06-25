import React, {useState} from 'react';
import '../css/HeaderCss/InformationUser.css';
import icon_main_iuh from '../../img/icon-main-iuh.png';


function InfoUser (props) {

    const [valueCheckedGender, setValueCheckedGender] = useState("");
    const [valueName, setValueName] = useState("");
    const [valueBirthday, setValueBirthday] = useState("");

    console.log(valueName);
    console.log(valueCheckedGender);
 
    function postAccount () {
        // Kiểm tra browser có hỗ trợ fetch
        if (!('fetch' in window)) {
            console.log('Fetch API not found, try including the polyfill');
            return;
        }
        
        const url = "http://ec2-18-222-220-226.us-east-2.compute.amazonaws.com:3000/account/register";

        var data = {
            id: props.valuePhone,
            Avatar: "",
            Mssv: "",
            Gender: valueCheckedGender,
            Sdt: props.valuePhone,
            pass: props.valuePassDK,
            TypeUser: "",
            Username: valueName,
            IdSchool:"",
            IDRegister: "2"
        };

        var optionFetch = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        };

        console.log(data);

        fetch(url, optionFetch)
        .then(response => response.json())
        .then(result => {
            //Trả về object reponse true false
            if (result.Status) {
                console.log("Đăng kí thành công");
                props.setValueMsgErr("Đăng kí thành công");
            } else {
                console.log("Đăng kí thất bại");
                props.setValueMsgErr("Đăng kí thất bại");
            }
        })
        .catch(error => console.error("Error: ", error))
        props.setStyleInfoUser({...props.styleInfo, display: "none"})
        props.setStyleBGLogin({...props.style, display: "flex"});
        props.setStyleBGLogin({...props.styleBGLogin, display: "none"})
    }
    

    return (
        <div style={props.styleInfo} className="info-user-container">
            <div className="div-input-info-user-container">
                <div className="div-logo"><img src={icon_main_iuh} alt=""/></div>
                <div className="div-text-username" >Tên hiển thị<span className="required">*</span></div>
                <div className="div-input-text-username">
                    <input placeholder="Tên hiển thị" className="input-username" onChange={(e) => setValueName(e.target.value)}/>
                </div>
                <div className="div-text-ngaysinh">Ngày sinh<span className="required">*</span></div>
                <div className="div-input-ngaysinh">
                    <input placeholder="Ngày tháng năm sinh" className="input-ngaysinh" onChange={(e) => setValueBirthday(e.target.value)}/>
                </div>
                <div className="div-text-sex" >Giới tính<span className="required">*</span></div>
                <div className="div-select-sex">
                    <input id="checkedNam" type="radio" name="gender" value="nam" onChange={(e) => setValueCheckedGender(e.target.value)} hidden/>
                    <label for="checkedNam" className="div-select-nam">
                        <div></div><span style={{fontWeight: "600"}}>Nam</span>
                    </label>

                    <input id="checkedNu" type="radio" name="gender" value="nu" onChange={(e) => setValueCheckedGender(e.target.value)} hidden/>
                    <label for="checkedNu" className="div-select-nu">
                        <div></div><span style={{fontWeight: "600"}}>Nu</span>
                    </label>

                    <input id="checkedLGBT" type="radio" name="gender" value="lgbt" onChange={(e) => setValueCheckedGender(e.target.value)} hidden/>
                    <label for="checkedLGBT" className="div-select-LGBT">
                        <div></div><span style={{fontWeight: "600"}}>LGBT</span>
                    </label>
                </div>
                <button type="button" className="btn-next" disabled={valueName.length === 0 || valueCheckedGender.length === 0 || valueBirthday.length === 0 ? true : false} onClick={() => {
                    postAccount();
                }}>Tiếp tục</button>
            </div>
        </div>
    );
}

export default React.memo(InfoUser);