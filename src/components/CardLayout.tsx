import { useContext } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { ProjectObject, noteObject } from "../ProjectObjectInterface";
import ObjectCard from "./Card";
import ErrorHandling, { errorStatus } from "./Error components/ErrorHandling";
import NothingFound from "./Error components/Nothing Found";
import { ThemeContext } from "./Main";


interface I_CardLayout {
    Folder: ProjectObject | null
    URLparams: string[]
}

//sorts objects based on whether they are folders or files
function sortFoldersnFiles(files: ProjectObject[]) {
    files.sort( (a,b) => {
        if(a.children && b.children) return (a.name < b.name) ? -1 : 1;
        if(a.children) return -1;
        if(b.children) return 1
        else {
            // comparison of 2 files
            // check if initials of the files are numbers
            let aNum = parseInt(a.name);
            let bNum = parseInt(b.name);
            if(!isNaN(aNum) || !isNaN(bNum)) {
                if(isNaN(bNum)) return -1;
                if(isNaN(aNum)) return 1;
                return aNum - bNum;
            }
            // if not numbers, compare alphabetically
            return (a.name < b.name) ? -1 : 1;
        }
    })

    return files
}


export default function CardLayout({Folder, URLparams}: I_CardLayout) {
    
    const {theme, } = useContext(ThemeContext);
    const dark = theme == "dark"
    
    try{
        
        //if the object doesnt have children (i.e. a file)
        //redirect it to its parent folder, by deleting the last part of the url
        if(!Folder.children) {
            const newURL = URLparams.slice(0, -1).join('/')
            return <Redirect to={`/${newURL}`} />
        }

        const unspecifiedYear = sortFoldersnFiles([...Folder.children].filter( file => (!file.date)))
            .map( js => {
                return <ObjectCard className="mb-5" key={js.name} json={js} />
            })

        let filesPerYear = []

        if (unspecifiedYear.length > 0) filesPerYear[0] = unspecifiedYear;

        
        //fills the index corresponding to the year.
        for(let i = 19; i < 25; i++) {
            if (Folder.children.filter( file => (file.date && file.date == i+'')).length <= 0) continue;

            filesPerYear[i] = Folder.children.filter( file => (file.date && file.date == i+''))

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
            reversedFilesPerYear[26] = unspecifiedYear;

        const generalNotesElement: JSX.Element = (
            <>
            {Folder.note && Folder.note.length > 0?
                Folder.note.filter(n => !n.date).map( (note, i) => (
                    <Alert variant={dark? "success" : "primary"} key={i}>
                        {note.message}
                    </Alert>
                ))   
                : null
            }
            </>
        )

        const sourceElement: JSX.Element = (
            <>
            {Folder.source? 
                <Col xs={12} lg={6}>
                    <Alert variant={dark? "secondary" : "info"}>
                        <strong className="text-primary">Source:</strong>
                        {Folder.source.map( (link, i) => (
                            <a href={link} target='_blank' rel="noreferrer" className='pe-3 ps-3'>{`link ${i+1}`}</a>
                        ))}
                    </Alert>
                </Col> : null}
            </>
        )

        const creditsElement: JSX.Element = (
            <>
            {Folder.credits && Folder.credits.length > 0? 
                <Col xs={12} lg={6}>
                    <Alert variant={dark? "secondary" : "info"}>
                        <strong className="text-primary">Credits:</strong>
                        {Folder.credits.map( (name) => (
                            <span className='pe-3 ps-3'>{name}</span>
                        ))}
                    </Alert>
                </Col> : null}
            </>
        )

        const returned: JSX.Element = (
            <>
            {generalNotesElement}
            {reversedFilesPerYear.map( (filesArray, i) => (
                <Row className="ps-2 pe-2" key={i}>
                    {filesPerYear.length == 1 && filesPerYear[0]? 
                        null : 
                        <Col className="bg-info btn-info mb-3 breadcrumb rounded-pill" xs={12}>
                            {filesArray === unspecifiedYear? "Unspecified Year" : `Year 20${filesPerYear.indexOf(filesArray)}`}
                        </Col>
                    }

                    
                    {Folder.note && Folder.note.length > 0?
                        Folder.note.filter(n => n.date && n.date == `${filesPerYear.indexOf(filesArray)}`).map( (note, i) => (
                            <Alert variant={dark? "warning" : "danger"} key={i}>
                                {note.message}
                            </Alert>
                        ))   
                        : null
                    }
                    {filesArray}
                </Row>
            ))}
            <Row>
                {sourceElement}
                {creditsElement}
            </Row>
            </>
        )
        return returned
    } catch (e) {
        console.error(e)
        return (
            <ErrorHandling status={errorStatus.error} />
        )
    }
}