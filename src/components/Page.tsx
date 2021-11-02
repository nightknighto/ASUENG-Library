import { Container, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import { useObjectContext } from "../ObjectContext";
import BreadCrumbComp from "./Breadcrumb";
import CardLayout from "./CardLayout";
import { JSONobject } from "../JSONobjectInterface";
import ButtonLayout from "./ButtonLayout";
import { useEffect, useState } from "react";
import ErrorHandling from "./Error components/ErrorHandling";
import { statusConsts } from "../Constants";



export default function Page () {
  // const {dataObjects, setObject} = useObjectContext()
  const [object , setObject] = useState<JSONobject | null>(null)
  const [status , setStatus] = useState(statusConsts.loading)
  const { pathname: url } = useLocation()

  let URLparams: string[] = []
  url.replace(/\/([\w|\-|.]*)/g, (s, match) => {
    if(match !== "") URLparams.push(match)
    return ''
  })

  useEffect( () => {
    setStatus(statusConsts.loading)
    fetch('https://deadreyo.github.io/React-Project-nodeJS/dist/'+URLparams[0].toLowerCase()+'.json')
    .then( response => {

      console.log(response.status)
      if(!response.ok) {
        if(response.status === 404) setStatus(statusConsts.notFound);
        else setStatus(response.statusText);

        throw new Error(response.statusText)
      }
        
      return response.json()
    })
    .then( body => {
      console.log(JSON.stringify(body))
      setObject(body)
      setStatus(statusConsts.ready)
    })
    .catch( error => console.log('Fetch issue:', error))

    function cleanUp() {setStatus(statusConsts.loading); setObject(null)}
    return cleanUp()

  }, [URLparams[0].toLowerCase()])

  const processPath: () => JSONobject | null = () => { 

    if(object) {
      console.log('Success')
      console.log(URLparams)
      let selectedObj = object
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

    return null;
  }

  return (
    <Container fluid className="page">
      <Row className="breadcrumbCustom mt-3 pt-2">
        <BreadCrumbComp URLparams={URLparams}/>
      </Row>
        {status !== statusConsts.ready?
          <ErrorHandling status={status} />
        :
          <>
          {processPath()?.buttons? 
            <ButtonLayout Folder={processPath()}/>
            : 
            <CardLayout Folder={processPath()} URLparams={URLparams}/>
          }
          </>
        }
    </Container>
  );
}
