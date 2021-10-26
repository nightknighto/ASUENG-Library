import React, { useContext, useState } from "react";
import jsonFile from './assets/object.json'
import { JSONobject } from "./JSONobjectInterface";

const objectContext = React.createContext(null)

export function useObjectContext() : I_myObj {
    return useContext(objectContext)
}

export function ObjectContextProvider({children}) {
    const [object, setObject] = useState(null)

    const val: I_myObj = {
        objects: JSON.parse(JSON.stringify(jsonFile)),
        setObject: setObject
    }
    
    return(
        <objectContext.Provider value={val}>
            {children}
        </objectContext.Provider>
    )
}

interface I_myObj {
    objects: JSONobject[];
    setObject: (object) => void;
}