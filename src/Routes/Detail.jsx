import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
    const parametros = useParams()

    const [Odont, setOdont] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            axios(`https://jsonplaceholder.typicode.com/users/${parametros.id}`)
            .then((res) => setOdont(res.data))
        }
        fetchData()
    })

    const { Theme } = useContext(ContextGlobal)

    return (
        <div className='detail' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Detail Dentist {Odont.id} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Odont.name}</td>
                        <td>{Odont.email}</td>
                        <td>{Odont.phone}</td>
                        <td>{Odont.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail