import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const userValue= {
        "userName": "",
        "userImage": "",
    }

    const [state,setState] = useState(userValue);

    return(
        <NoteContext.Provider value={{state,setState}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState