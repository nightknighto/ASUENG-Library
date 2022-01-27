import { Alert } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Page from "./Page";

export default function Main() {

    return(
      <div className='mainContainer'>
      <BrowserRouter basename="/ASUENG-Library">
        <Header />
        <Alert variant='success' className="mt-3 mb-0">
            Currently available courses: (Electrical: <strong className="text-secondary">Electrical Circuits 1</strong>, <strong className="text-secondary">Logic Design</strong>, <strong className="text-secondary">Modern Physics</strong>) , (All Departments: <strong className="text-secondary">Probability n Statistics</strong>, <strong className="text-secondary">Report Writing</strong>)
        </Alert>
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
    )
}