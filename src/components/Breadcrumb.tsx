import { useContext } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Main";

interface I_BreadCrumbComp {
    URLparams: string[]
}

export default function BreadCrumbComp({URLparams}: I_BreadCrumbComp) {

    const {theme, } = useContext(ThemeContext);
    const dark = theme == "dark"

    const prepareHref = (par: string) => {
      let url = '/'
      for(let i = 0; i <= URLparams.indexOf(par); i++) {
        //if the URLparam string already ends in a '/' like "index/" then dont add a '/'
        if(URLparams[i].slice(URLparams[i].length-2, 1) === '/') url += URLparams[i];
        //else if it doesn't end in a '/', then add a '/'
        else url += URLparams[i]+'/';
      }
      return url
    }

    return (
      <Breadcrumb listProps={ {className: dark? "" : "bg-info"}}>
        {URLparams.map( (par) => (
          <Breadcrumb.Item>
            <Link to={prepareHref(par)} className={dark? "link-dark" : "text-black"}>{par.replace(/_/g, ' ')}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    )
  }