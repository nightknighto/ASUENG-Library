import { useContext, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { ThemeContext } from "./Main";

export default function ThemeSwitch() {

    const {theme, setTheme} = useContext(ThemeContext);
    
    let darkSheet: CSSStyleSheet = document.styleSheets[0]
    let lightSheet: CSSStyleSheet = document.styleSheets[1]

    // for(let i = 0; i < document.styleSheets.length; i++) {
    //     if(document.styleSheets[i].title == "light") lightSheet = document.styleSheets[i]
    //     else if(document.styleSheets[i].title == "dark") darkSheet = document.styleSheets[i]
    // }

    if(theme == "dark") {
        darkSheet.disabled = false;
        lightSheet.disabled = true;
    } else {
        darkSheet.disabled = true;
        lightSheet.disabled = false;
    }

    return(
        <ButtonGroup style={{marginRight: "10px"}}>
            <ToggleButton key={1} id="radio-dark" value="dark" type="radio" variant="outline-success" name="theme"
                checked = {theme === "dark"} onClick={() => {setTheme("dark")}}
                style={{marginBottom: "1px",}}>Dark</ToggleButton>
            <ToggleButton key={2} id="radio-light" value="light" type="radio" variant="outline-danger" name="theme"
                checked = {theme === "light"} onClick={() => {setTheme("light")}}>Light</ToggleButton>
        </ButtonGroup>
    )
}