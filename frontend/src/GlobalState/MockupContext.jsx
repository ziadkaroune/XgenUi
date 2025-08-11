
import React , { createContext , useState } from "react";

export const  MockupContext = createContext();

 export const  MockupProvider = ({children}) => {

    const [sharedData , setSharedData] = useState({staticUi : "" ,  desc: ""});
    return(
            <MockupContext.Provider value={{sharedData , setSharedData}}>
                         {children}                        {/** preview page  + studioPage */}
            </MockupContext.Provider>
    );

}
 