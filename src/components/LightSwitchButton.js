import React, {useState} from "react";

function LightSwitchButton (props) {
    const {light, setLight, switchLight} = props;
    const handleClick= () => {
        switchLight();
        props.increaseAnger(0.1);
    }
    return ( 
        <button onClick={handleClick} className="LightSwitchButton">
           {light === "on" && <span className="on"><i>💡</i>I'm on!</span>}
            {light === "off" && <span className="off"><i>💡</i>I'm off!</span>}
        </button>
    )

}

export default LightSwitchButton;