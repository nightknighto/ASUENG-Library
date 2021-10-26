import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainPage from "./MainPage";
import Page from "./Page";

export default function Main() {

    return(
      <div className='mainContainer'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/'>
            <Page />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      </div>
    )
}