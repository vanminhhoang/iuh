import React, {useState} from 'react';
import '../css/HeaderCss/ShowMessageErr.css';


function ShowMessageErr (props) {
    return (
        <div style={props.styleSME} class="div-show">
            <div className="modal-content">
            <div class="modal-body">{props.value}</div>
                <div class="modal-footer"><button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" onClick={() => {
                    props.setStyleSME({...props.styleSME, display: "none"});
                }}>Đóng</button></div>
            </div>
        </div>
    );
}

export default ShowMessageErr;