import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about={
        name:"Suleman Suraj",
        bio:"I am a hard working young man who like programming.",
        hobbies:["Reading","Gaming", "Eating"]
    }
    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}
export default AboutContextProvider