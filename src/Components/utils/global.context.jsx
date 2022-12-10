import { createContext } from "react";
import { useState } from "react";

export const EstadoIn = {
    themes: {
        light: {
            backgroundHome:"white",
            backgroundNavbar:"rgb(230, 230, 215)",
            color:"black"
        },
        dark: {
            backgroundNavbar:"#161616",
            backgroundHome:"#12121296",
            color:"white"
        }
    },
    favs:JSON.parse(localStorage.getItem("favs")||"[]")
}
export const ContextGlobal = createContext(EstadoIn); 
export const ContextProvider = ({ children }) => { 
    const [Theme, setTheme] = useState(EstadoIn.themes.light)
    const handleThemeChange = () => {
        if(Theme === EstadoIn.themes.dark) setTheme(EstadoIn.themes.light)
        if(Theme === EstadoIn.themes.light) setTheme(EstadoIn.themes.dark)
    }
    const [Favs, setFavs] = useState(EstadoIn.favs)

    return (
        <ContextGlobal.Provider value={{Theme, handleThemeChange, Favs, setFavs}}>
            {children}
        </ContextGlobal.Provider>
    );
};
