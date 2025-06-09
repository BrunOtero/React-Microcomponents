import { useState } from "react";

interface inputParams {
    type?: React.HTMLInputTypeAttribute,
    isRequired?: boolean,
    isDisabled?: boolean,
    label?: string,
    placeholder?: string,
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void,
    validator?: (value: string) => boolean,
    invalidText?: string,
    hintText?: string,
    style?: React.CSSProperties,
    inputStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    invalidStyle?: React.CSSProperties,
    hintStyle?: React.CSSProperties
}

const defaultStyle: React.CSSProperties = {
    position: "relative",
}

const defaultInputStyle: React.CSSProperties = {
    padding: "5px"
}

const defaultLabelStyle: React.CSSProperties = {
    position: "absolute",
    left: "5px",
    top: "5px",
    transition: "transform .2s ease"
}

const defaultInvalidStyle: React.CSSProperties = {
    position: "absolute",
    top: '100%',
    color: 'red',
    minWidth: 'max-content' 
}

const defaultHintStyle: React.CSSProperties = {
    position: "absolute",
    top: '200%',
    minWidth: 'max-content' 
}

function CustomInput({
    type = "text",
    isRequired = false,
    isDisabled = false,
    label = "",
    placeholder = "",
    onChange = () => {},
    validator = () => true,
    invalidText = "⚠ Texto inválido",
    hintText = "ℹ Texto não satisfaz requisitos",
    style = {},
    inputStyle = {},
    labelStyle = {},
    invalidStyle = {},
    hintStyle = {},
}: inputParams) {

    const [inputValue, setInputValue] = useState<string>("");
    const [isHovering, setIsHovering] = useState<Boolean>(false);
    const [isSelected, setIsSelected] = useState<Boolean>(false);

    const moveLabelUp = inputValue == "" && !isHovering && !isSelected ? "translateY(0px)" : "translateY(-25px)";
    const showPlaceholder = isHovering || isSelected;
    const isValid = validator(inputValue);

    return (
        <div style={{...defaultStyle, ...style}} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <div style={{...defaultLabelStyle, transform: moveLabelUp, ...labelStyle}}>{label}</div>
            <input 
                style={{...defaultInputStyle, ...inputStyle}}
                type={type}
                value={inputValue} 
                onChange={(e) => {
                    onChange(e);
                    setInputValue(e.target.value);
                }}
                onFocus={() => setIsSelected(true)} onBlur={() => setIsSelected(false)}
                placeholder={showPlaceholder ? placeholder : ''}
                required={isRequired}
                disabled={isDisabled}
            />
            <div style={{...defaultInvalidStyle, ...invalidStyle}}>{!isValid && inputValue && !isSelected ? invalidText : ""}</div>
            <div style={{...defaultHintStyle, ...hintStyle}}>{!isValid && inputValue && (isSelected || isHovering) ? hintText : ""}</div>
        </div>
    )
}

export default CustomInput