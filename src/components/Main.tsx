import { Alert } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainPage from "./MainPage";
import Page from "./Page";

export default function Main() {

    return(
      <div className='mainContainer'>
      <BrowserRouter basename="/ASUENG-Library">
        <Header />
        <Alert variant='success' className="mt-3 mb-0">
            Currently available courses: (Electrical: <strong className="text-secondary">Electrical Circuits 1</strong>)
        </Alert>
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