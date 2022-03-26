import { useContext } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { JSONobject } from "../JSONobjectInterface";
import ObjectCard from "./Card";
import NothingFound from "./Error components/Nothing Found";
import { ThemeContext } from "./Main";


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
    
    const {theme, } = useContext(ThemeContext);
    const dark = theme == "dark"
    
    //if the object doesnt have children (i.e. a file)
    //redirect it to its parent folder, by deleting the last part of the url
    if(!Folder.children) {
        const newURL = URLparams.slice(0, -1).join('/')
        return <Redirect to={`/${newURL}`} />
    }

    const unspecifiedYear = sortFoldersnFiles([...Folder.children].filter( file => (!file.note && !file.credits && !file.date)))
        .map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })

    let filesPerYear = []
    let filesNotesPerYear = []
    let allNotes = []
    let insiderCredits = [] //means Credits that are inside files (credits via files)
    
    
    allNotes = Folder.children.filter( file => (file.note))
    insiderCredits = Folder.children.filter( file => (file.credits)) //returns the objects of {name, credits}

    let TOTALCredits = [] // all available credits, from Folder or from Insider files
    if(Folder.credits) TOTALCredits = TOTALCredits.concat(Folder.credits)
    if(insiderCredits.length > 0) insiderCredits.forEach( obj => TOTALCredits.push( obj.credits) )

    if (unspecifiedYear.length > 0) filesPerYear[0] = unspecifiedYear;

    filesNotesPerYear[0] = allNotes.filter( file => !file.date)
    
    //fills the index corresponding to the year.
    for(let i = 19; i < 25; i++) {
        if (Folder.children.filter( file => (file.date && file.date == i+'')).length <= 0) continue;

        filesPerYear[i] = Folder.children.filter( file => (!file.note && !file.credits && file.date && file.date == i+''))
        filesNotesPerYear[i] = allNotes.filter( file => (file.date && file.date == i+''))

        sortFoldersnFiles(filesPerYear[i])

        filesPerYear[i] = filesPerYear[i].map( (js,i) => {
            return <ObjectCard className="mb-5" key={js.name+''+i} json={js} />
        })
    }

    let reversedFilesPerYear = []
    for(let i = 0; i < 10; i++) {
        if(filesPerYear[25 - i]) {
            reversedFilesPerYear[i] = filesPerYear[25 - i];
        }
    }

    if(unspecifiedYear.length > 0)
        reversedFilesPerYear[26] = unspecifiedYear
    
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
        {filesNotesPerYear[0]?.length === 0? null: 
            filesNotesPerYear[0].map( (file, i) => (
                <Alert variant={dark? "success" : "primary"} key={i}>
                    {file.note}
                </Alert>
            ))    
        }
        {reversedFilesPerYear.map( (filesArray, i) => (
            <Row className="ps-2 pe-2" key={i}>
                {filesPerYear.length == 1 && filesPerYear[0]? 
                    null : 
                    <Col className="bg-info btn-info mb-3 breadcrumb rounded-pill" xs={12}>
                        {filesArray === unspecifiedYear? "Unspecified Year" : `Year 20${filesPerYear.indexOf(filesArray)}`}
                    </Col>
                }

                {filesNotesPerYear[filesPerYear.indexOf(filesArray)]?.length === 0 || filesPerYear.indexOf(filesArray) === 0? null: 
                    filesNotesPerYear[filesPerYear.indexOf(filesArray)].map( file => (
                        <Alert variant={dark? "warning" : "danger"}>
                            {file.note}
                        </Alert>
                    ))    
                }
                {filesArray}
            </Row>
        ))}
        <Row>
            {Folder.source? 
            <Col xs={12} lg={6}>
                <Alert variant={dark? "secondary" : "info"}>
                    <strong className="text-primary">Source:</strong>
                    {Folder.source.map( (link, i) => (
                        <a href={link} target='_blank' rel="noreferrer" className='pe-3 ps-3'>{`link ${i+1}`}</a>
                    ))}
                </Alert>
            </Col> : null}
            {TOTALCredits.length > 0? 
            <Col xs={12} lg={6}>
                <Alert variant={dark? "secondary" : "info"}>
                    <strong className="text-primary">Credits:</strong>
                    {TOTALCredits.map( (name) => (
                        <span className='pe-3 ps-3'>{name}</span>
                    ))}
                </Alert>
            </Col> : null}
        </Row>
        </>
    )
    // return (
        
        
    //     <>{unspecifiedYear}</>
    // )
}