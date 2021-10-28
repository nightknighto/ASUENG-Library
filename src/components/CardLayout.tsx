import { Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { JSONobject } from "../JSONobjectInterface";
import ObjectCard from "./Card";
import NothingFound from "./Error components/Nothing Found";

interface I_CardLayout {
    Folder: JSONobject | null
    URLparams: string[]
}

function sortFoldersnFiles(files: JSONobject[]) {
    files.sort( (a,b) => {
        if(a.children && b.children) return 0;
        if(a.children) return -1;
        if(b.children) return 1;
    })

    return files
}

export default function CardLayout({Folder, URLparams}: I_CardLayout) {

    if(Folder === null) return <NothingFound />
    
    //if the object doesnt have children (i.e. a file)
    //redirect it to its parent folder, by deleting the last part of the url
    if(!Folder.children) {
        const newURL = URLparams.slice(0, -1).join('/')
        return <Redirect to={`/${newURL}`} />
    }

    //sorts objects based on whether they are folders or files
    const unspecifiedYear = sortFoldersnFiles([...Folder.children].filter( file => (!file.date)))
        .map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })

    let filesPerYear = []

    if (unspecifiedYear.length > 0) filesPerYear[0] = unspecifiedYear;
    
    //fills the index corresponding to the year.
    for(let i = 19; i < 22; i++) {
        if (Folder.children.filter( file => (file.date && file.date == i+'')).length <= 0) continue;

        filesPerYear[i] = Folder.children.filter( file => (file.date && file.date == i+''))

        sortFoldersnFiles(filesPerYear[i])

        filesPerYear[i] = filesPerYear[i].map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })
    }
    
    if(filesPerYear.length == 1 && filesPerYear[0]) {
        return (
            <>
            <Row>
                {unspecifiedYear}
            </Row>
            </>
        )
    }

    else return (
        <>
        {filesPerYear.reverse().map( (filesArray, i) => (
            <Row>
                <Col className="bg-info btn-info mb-2" xs={12}>{filesArray === unspecifiedYear? "Unspecified Year" : `Year 20${20 - filesPerYear.indexOf(filesArray)}`}</Col>
                {filesArray}
            </Row>
        ))}
        </>
    )
    // return (
        
        
    //     <>{unspecifiedYear}</>
    // )
}