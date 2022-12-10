import React from "react";
import { useState } from "react";

const Form = () => {
    const [Data, setData] = useState({
        "nombre":"",
        "email":""
    })
    const handleChange = e => {
        let campo = e.target.name
        let valor = e.target.value
        setData({...Data,[campo]:valor})
    }
    const handleSubmit = e => {
        e.preventDefault()
        let testName = /^.{5,}$/.test(Data.nombre)
        let testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Data.email)
        let form = document.querySelector('form')
        
        let mensajes = document.querySelectorAll('p')
        mensajes.forEach(e => {
            e.remove()
        })
        if (testName === false || testEmail === false) {
            let error = document.createElement('p')
            error.innerHTML = "Por favor verifique su información nuevamente."
            form.after(error)
        } else {
            let msg = document.createElement('p')
            msg.innerHTML = `Gracias ${Data.nombre}, te contactaremos cuanto antes vía mail.`
            form.after(msg)
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={handleChange} />
                <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Form;

