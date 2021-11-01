import React, { useContext, useState } from "react";
import jsonFile from './assets/elecObject.json'
import { JSONobject } from "./JSONobjectInterface";

const objectContext = React.createContext(null)

export function useObjectContext() : I_myObj {
    return useContext(objectContext)
}

export function ObjectContextProvider({children}) {
    const [object, setObject] = useState(null)

    const val: I_myObj = {
        dataObjects: JSON.parse(JSON.stringify(jsonFile)),
        setObject: setObject
    }
    
    return(
        <objectContext.Provider value={val}>
            {children}
        </objectContext.Provider>
    )
}

interface I_myObj {
    dataObjects: JSONobject[];
    setObject: (object) => void;
}