import React from "react";
import { Link } from "react-router-dom";

import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Card = ({ name, username, id }) => {   
    const {Favs,setFavs} = useContext(ContextGlobal)
    const addFav = () => {
        let existe = false 
        let favoritos = Favs 
        favoritos.forEach(e => { 
            if (e.id === id) { 
                existe = true
                let index = favoritos.indexOf(e)
                favoritos.splice(index,1)  // splice elimina elemento de una posicion espeficia
            }
        })
        if (existe === false) { 
            
            favoritos.push({ // pusheamos si no exitse en favs
                "name":name,
                "username":username,
                "id":id
            })
            
            localStorage.setItem("favs", JSON.stringify(favoritos))
            alert("Odontologo agregado a favoritos")
        } else {
            localStorage.setItem("favs", JSON.stringify(favoritos)) 
            alert("Odontologo removido de favoritos")
        }
        setFavs(favoritos)
    }
    return (
        <div className="card">
            <img src="/images/doctor.jpg" alt="Doctor" />
            <h2><Link to={`/${id}`}>{name}</Link></h2>
            <h3>{username}</h3>
            <button onClick={addFav} className="favButton">⭐</button>
        </div>

    );

};
export default Card;