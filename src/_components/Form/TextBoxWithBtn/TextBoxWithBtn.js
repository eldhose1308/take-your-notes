import React from "react";

import TextBox from "_components/Form/TextBox/TextBox";
import Button from "_components/Form/Button/Button";

// import './TextBoxWithBtn.css'

const TextBoxWithBtn = (props) => {
    const { labelName, buttonText } = props;

    return (
        <React.Fragment>
            <div className="input-group input-group-sm">

                <TextBox labelName={labelName} />


                <span className="input-group-append">
                    <Button text={buttonText} />
                </span>


            </div>
        </React.Fragment>
    )
}

export default TextBoxWithBtn;