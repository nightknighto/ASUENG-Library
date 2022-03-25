import { useContext, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { ThemeContext } from "./Main";

export default function ThemeSwitch() {

    const {theme, setTheme} = useContext(ThemeContext);

    console.log("here", document.styleSheets);
    if(theme == "dark") {
        document.styleSheets[4].disabled = true;
        document.styleSheets[2].disabled = false;
    } else {
        document.styleSheets[4].disabled = false;
        document.styleSheets[2].disabled = true;
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