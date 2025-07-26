import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Page from "./Page";

export const ThemeContext = React.createContext({theme: "dark", setTheme: null});

export default function Main() {
  const [theme, setTheme] = useState("dark")
  const coursesTextClass = theme === "dark"? "text-secondary fst-italic":"text-primary fst-italic"

    return(
      <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}} >
        <div className='mainContainer'>
        <BrowserRouter basename="/ASUENG-Library">
          <Header />
          {/* <Alert variant={theme == "dark"? "success" : "info"} className="mt-3 mb-0">
              Currently available courses: (Electrical: <strong className={coursesTextClass}>Sophomore Term 1</strong>, <strong className={coursesTextClass}>Sophomore Term 2</strong>) 
              , (Mechanical: <strong className={coursesTextClass}>Sophomore Term 2</strong>) , (All Departments: <strong className={coursesTextClass}>Probability n Statistics</strong>, <strong className={coursesTextClass}>Report Writing</strong>, <strong className={coursesTextClass}>Differential Eqs</strong>)
          </Alert> */}
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/'>
              <Page />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    )
}