import { Alert, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { JSONobject } from "../JSONobjectInterface";
import ObjectCard from "./Card";
import NothingFound from "./Error components/Nothing Found";

interface I_CardLayout {
    Folder: JSONobject | null
    URLparams: string[]
}

//sorts objects based on whether they are folders or files
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

    const unspecifiedYear = sortFoldersnFiles([...Folder.children].filter( file => (!file.note && !file.date)))
        .map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })

    let filesPerYear = []
    let filesNotesPerYear = []
    let allNotes = []
    
    allNotes = Folder.children.filter( file => (file.note))

    if (unspecifiedYear.length > 0) filesPerYear[0] = unspecifiedYear;

    filesNotesPerYear[0] = allNotes.filter( file => !file.date)
    
    //fills the index corresponding to the year.
    for(let i = 19; i < 25; i++) {
        if (Folder.children.filter( file => (file.date && file.date == i+'')).length <= 0) continue;

        filesPerYear[i] = Folder.children.filter( file => (!file.note && file.date && file.date == i+''))
        filesNotesPerYear[i] = allNotes.filter( file => (file.date && file.date == i+''))

        sortFoldersnFiles(filesPerYear[i])

        filesPerYear[i] = filesPerYear[i].map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })
    }
    
    // if(filesPerYear.length == 1 && filesPerYear[0]) {
    //     return (
    //         <>
    //         <Row className="ps-2 pe-2">
    //             {unspecifiedYear}
    //         </Row>
    //         </>
    //     )
    // }

     return (
        <>
        {filesPerYear.reverse().map( (filesArray, i) => (
            <Row className="ps-2 pe-2">
                {filesNotesPerYear[i]?.length === 0? null: 
                    filesNotesPerYear[0].map( file => (
                        <Alert variant='warning'>
                            {file.note}
                        </Alert>
                    ))    
                }
                {filesPerYear.length == 1 && filesPerYear[0]? 
                    null : 
                    <Col className="bg-info btn-info mb-3 breadcrumb rounded-pill" xs={12}>
                        {filesArray === unspecifiedYear? "Unspecified Year" : `Year 20${20 - filesPerYear.indexOf(filesArray)}`}
                    </Col>
                }
                {filesArray}
            </Row>
        ))}
        </>
    )
    // return (
        
        
    //     <>{unspecifiedYear}</>
    // )
}