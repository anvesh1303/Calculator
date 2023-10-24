import React, { useState } from 'react'
import '../styles/styles.css'

const Main = () =>{

    const [displayValue, setDisplayValue] = useState("");
    const [operation, setOperation] = useState("");
    const [tempValue, setTempValue] = useState(0);
    const [theme, setTheme] = useState({
        wholekey: "whole1",
        calckey: "calc1",
        themekey: "themec1",
        themenumkey: "themenum1",
        screenkey: "screen1",
        keypadkey: "keypad1",
        delkey: "del1",
        footerbuttonskey: "footerbuttons1",
        buttonskey: "key1",
        resetkey: "reset1",
        equaltokey: "equalto1",
        currenttheme: "page1"
        }
    );
    const [secondValue, setSecondValue] = useState("");

const handleClick = (e) => {
    //let value = e.target.innerText;
    let value = e.target.value;

    if (operation) {
        setSecondValue((prev) => prev + value);
    }

    setDisplayValue((prev) => prev + value);
    //setDisplayValue(7)
}

const operators = {
    add: "+", subtract: "-", multiply: "*", divide: "/"
}

const handleCalculations = (cal) => {
    switch (cal) {
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            if (!displayValue || operation) return; 
            setOperation(cal);
            setTempValue(displayValue);
            setDisplayValue((prev)=>prev+operators[cal]);
            break;
        case "result":
            let output = 0;
            switch (operation) {
                case "add":
                    output = parseFloat(tempValue) + parseFloat(secondValue);
                    break;
                case "subtract":
                    output = parseFloat(tempValue) - parseFloat(secondValue);
                    break;
                case "multiply":
                    output = parseFloat(tempValue) * parseFloat(secondValue);
                    break;
                case "divide":
                    output = parseFloat(tempValue) / parseFloat(secondValue);
                    break;
                default:
                    break;
            }
            setDisplayValue(output.toString());
            setOperation("");
            setTempValue("");
            setSecondValue("");
            break;
        default:
            break;
    }
}


    const specialClick = (e) =>{
        const clickedValue = e.target.value;
        switch (clickedValue){
            case "RESET":
                setDisplayValue("");
                break;
            case "DEL":
                setDisplayValue(displayValue.toString());
                setDisplayValue(displayValue.slice(0,-1));
                break;
            default:
                break;
        }
    }

    return(
        <div className={`whole ${theme.wholekey}`}>
            <div className='calculator'>
                <div className='header'>
                    <div className={`calc ${theme.calckey}`}>calc</div>
                    <div className='themesection'>
                        <div className={`theme ${theme.themekey}`}>THEME</div>
                        <div className='themenumbers'>
                            <button onClick={()=>setTheme({wholekey: "whole1",calckey: "calc1", themekey:"themec1", themenumkey:"themenum1", screenkey:"screen1", keypadkey:"keypad1", delkey:"del1", footerbuttonskey:"footerbuttons1", buttonskey:"key1", resetkey:"reset1", equaltokey:"equalto1"})} className={`theme1 ${theme.themenumkey} ${theme.wholekey === "whole1"?"currentpage":""}`}>1</button>
                            <button onClick={()=>setTheme({wholekey: "whole2",calckey: "calc2", themekey: "themec2", themenumkey:"themenum2", screenkey:"screen2", keypadkey: "keypad2", delkey:"del2", footerbuttonskey:"footerbuttons2", buttonskey:"key2", resetkey:"reset2", equaltokey:"equalto2"})} className={`theme2 ${theme.themenumkey} ${theme.wholekey === "whole2"?"currentpage":""}`}>2</button>
                            <button onClick={()=>setTheme({wholekey: "whole3",calckey: "calc3", themekey: "themec3", themenumkey:"themenum3", screenkey:"screen3", keypadkey: "keypad3", delkey:"del3", footerbuttonskey:"footerbuttons3", buttonskey:"key3", resetkey:"reset3", equaltokey:"equalto3"})} className={`theme3 ${theme.themenumkey} ${theme.wholekey === "whole3"?"currentpage3":""}`}>3</button>
                        </div>
                    </div>
                </div>
                <div className={`screen ${theme.screenkey}`}>
                    <input id='testingip' type='text' value={displayValue} readOnly/>
                </div>
                <div className={`keypad ${theme.keypadkey}`}>
                    <button value="7" onClick={handleClick} data-testid="num7" className={`key ${theme.buttonskey}`}>7</button>
                    <button value="8" onClick={handleClick} className={`key ${theme.buttonskey}`}>8</button>
                    <button value="9" onClick={handleClick} className={`key ${theme.buttonskey}`}>9</button>
                    <button value="DEL" onClick={specialClick} className={`key ${theme.delkey}`}>DEL</button>
                    <button value="4" onClick={handleClick} className={`key ${theme.buttonskey}`}>4</button>
                    <button value="5" onClick={handleClick} className={`key ${theme.buttonskey}`}>5</button>
                    <button value="6" onClick={handleClick} className={`key ${theme.buttonskey}`}>6</button>
                    <button onClick={()=>handleCalculations("add")} className={`key ${theme.buttonskey}`}>+</button>
                    <button value="1" onClick={handleClick} className={`key ${theme.buttonskey}`}>1</button>
                    <button value="2" onClick={handleClick} className={`key ${theme.buttonskey}`}>2</button>
                    <button value="3" onClick={handleClick} className={`key ${theme.buttonskey}`}>3</button>
                    <button onClick={() => handleCalculations("subtract")} className={`key ${theme.buttonskey}`}>-</button>
                    <button value="." onClick={handleClick} className={`key ${theme.buttonskey}`}>.</button>
                    <button value="0" onClick={handleClick} className={`key ${theme.buttonskey}`}>0</button>
                    <button onClick={() => handleCalculations("divide")} className={`key ${theme.buttonskey}`}>/</button>
                    <button onClick={() => handleCalculations("multiply")} className={`key ${theme.buttonskey}`}>x</button>
                </div>
                <div className={`footerbuttons ${theme.footerbuttonskey}`}>
                    <button value="RESET" onClick={specialClick} className={`reset ${theme.resetkey}`}>RESET</button>
                    <button onClick={()=>handleCalculations("result")} className={`equalto ${theme.equaltokey}`}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Main