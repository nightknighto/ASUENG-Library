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
          <Alert variant={theme == "dark"? "success" : "info"} className="mt-3 mb-0">
            <p className="droid-arabic-kufi">
              اخي الفاضل: تذكر ان ما التوفيق الا من عند الله, فنحن ناخذ بالاسباب ونعافر ولكن الامر بيد الله وحده.
              لذلك وضعت بعض الادعية التي  يمكنك قرائتها بعد المذاكرة او في المواصلات قبل الامتحانات والتي كان لها فضل كبير علي: 
              <a href="https://drive.google.com/file/d/1YgSdk1USTIJsqwrFWJJ-6d2Lczn9JqtT/view?usp=sharing"  target="_blank" rel="noreferrer" className={theme == "dark"? "text-info" : "text-warning"}> ورقة الادعية</a>
              , وهذا
              <a href="https://drive.google.com/file/d/1hi4YPy882MRfrSSmRZTwBd83mSp1uP6w/view?usp=sharing"  target="_blank" rel="noreferrer" className={theme == "dark"? "text-info" : "text-warning"}> تسجيل </a>
              صوتي لها
            </p>
          </Alert>
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