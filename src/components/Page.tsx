import { Container, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import BreadCrumbComp from "./Breadcrumb";
import CardLayout from "./CardLayout";
import { ProjectObject } from "../ProjectObjectInterface";
import ButtonLayout from "./ButtonLayout";
import { useEffect, useState } from "react";
import ErrorHandling, { errorStatus } from "./Error components/ErrorHandling";



export default function Page () {
  // const {dataObjects, setObject} = useObjectContext()
  const [object , setObject] = useState<ProjectObject | null>(null)
  const [status , setStatus] = useState(errorStatus.loading)
  const { pathname: url } = useLocation()

  let URLparams: string[] = []
  url.replace(/\/([\w|\-|.]*)/g, (s, match) => {
    if(match !== "") URLparams.push(match)
    return ''
  })
  document.title = URLparams[URLparams.length -1].replace(/\_/g, ' ')

  useEffect( () => {
    setStatus(errorStatus.loading)
    fetch('https://deadreyo.github.io/React-Project-nodeJS/dist/'+URLparams[0].toLowerCase()+'.json')
    .then( response => {

      if(!response.ok) {
        if(response.status === 404) setStatus(errorStatus.notFound);
        // else setStatus(response.statusText);
        else setStatus(errorStatus.error)

        throw new Error(response.statusText)
      }
        
      return response.json()
    })
    .then( body => {
      setObject(body)
      setStatus(errorStatus.ready)
    })
    .catch( error => console.log('Fetch issue:', error))

    function cleanUp() {setStatus(errorStatus.loading); setObject(null)}
    return cleanUp()

  }, [URLparams[0].toLowerCase()])

  const processPath: () => ProjectObject | null = () => { 

    if(object) {
      let selectedObj = object
      for(let i = 1; i < URLparams.length; i++) {
        let search: ProjectObject;
        if(selectedObj.children) search = selectedObj.children.find((child) => (child.name.toLowerCase().replace(/ /g, '_') === URLparams[i].toLowerCase().replace(/ /g, '_')))
        else search = selectedObj.buttons.find((button) => (button.name.toLowerCase() === URLparams[i].replace(/_/g, ' ').toLowerCase()))
        if(search) {
          selectedObj = search
        } else {
          return null;
        }
      }
      return selectedObj

    }

    return null;
  }

  let processedObj = processPath();
try{
  return (
    <Container fluid className="page">
      <Row className="breadcrumbCustom mt-3 pt-2">
        <BreadCrumbComp URLparams={URLparams}/>
      </Row>
        {status !== errorStatus.ready?
          <ErrorHandling status={status} />
        :
          <>
          {processedObj?
            processedObj.buttons? 
              <ButtonLayout Folder={processedObj}/>
              : 
              <CardLayout Folder={processedObj} URLparams={URLparams}/>
          :
            <ErrorHandling status={errorStatus.notFound} />
          }
          </>
        }
    </Container>
  );
} catch(e) {
  return (
    <ErrorHandling status={errorStatus.error} />
  )
}
}
