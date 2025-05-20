import { useState } from "react";

interface inputParams {
    label?: string,
}

const componentStyle: React.CSSProperties = {
    position: "relative"
}

const labelStyle: React.CSSProperties = {
    position: "absolute",
    transition: "transform .2s ease"
}


function CustomInput({label}: inputParams) {

    const [inputValue, setInputValue] = useState<string>("");
    const [isHovering, setIsHovering] = useState<Boolean>(false);
    const [isSelected, setIsSelected] = useState<Boolean>(false);

    const moveLabelUp = inputValue == "" && !isHovering && !isSelected ? "translateY(0px)" : "translateY(-20px)";

    return (
        <div style={componentStyle} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div style={{...labelStyle, transform: moveLabelUp}}>{label}</div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsSelected(true)} onBlur={() => setIsSelected(false)}
            />
        </div>
    )
}

export default CustomInput