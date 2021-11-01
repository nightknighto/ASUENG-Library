import { Container, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import { useObjectContext } from "../ObjectContext";
import BreadCrumbComp from "./Breadcrumb";
import CardLayout from "./CardLayout";
import { JSONobject } from "../JSONobjectInterface";
import ButtonLayout from "./ButtonLayout";

export interface IPageProps {
}

export interface IPageState {
}

export default function Page (props: IPageProps) {
  const {dataObjects, setObject} = useObjectContext()
  const { pathname: url } = useLocation()

  let URLparams: string[] = []
  url.replace(/\/([\w|\-|.]*)/g, (s, match) => {
    if(match !== "") URLparams.push(match)
    return ''
  })

  const processPath: () => JSONobject | null = () => { 
    for(let obj of dataObjects) {
      if(obj.name.toLowerCase() === URLparams[0].toLowerCase()) {
        console.log('Success')
        console.log(URLparams)
        let selectedObj = obj
        for(let i = 1; i < URLparams.length; i++) {
          let search: JSONobject;
          if(selectedObj.children) search = selectedObj.children.find((child) => (child.name.toLowerCase() === URLparams[i].toLowerCase()))
          else search = selectedObj.buttons.find((button) => (button.name.toLowerCase() === URLparams[i].toLowerCase()))
          console.log(search)
          if(search) {
            selectedObj = search
          } else {
            return null;
          }
          console.log('name: '+selectedObj.name)
        }
        return selectedObj

      }
    }

    return null;
  }

  return (
    <Container fluid>
      <Row className="breadcrumbCustom mt-3 pt-2">
        <BreadCrumbComp URLparams={URLparams}/>
      </Row>
        {processPath()?.buttons? 
          <ButtonLayout Folder={processPath()}/>
          : 
          <CardLayout Folder={processPath()} URLparams={URLparams}/>
        }
    </Container>
  );
}
