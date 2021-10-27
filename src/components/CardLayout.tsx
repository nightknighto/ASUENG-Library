import { Redirect } from "react-router-dom";
import { JSONobject } from "../JSONobjectInterface";
import ObjectCard from "./Card";
import NothingFound from "./Error components/Nothing Found";

interface I_CardLayout {
    Folder: JSONobject | null
    URLparams: string[]
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
    const CardArray = [...Folder.children]
        .sort( (a,b) => {
            if(a.children && b.children) return 0;
            if(a.children) return -1;
            if(b.children) return 1;
        })
        .map( js => {
            return <ObjectCard className="mb-5" key={js.name} json={js} />
        })

    return (
        <>{CardArray}</>
    )
}