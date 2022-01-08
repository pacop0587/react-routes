import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const User = () => {

    const {id} = useParams()

    const [pueblo, setPueblo] = useState([])

     useEffect( () =>{
         obtenerDatos()
     },[])

     const obtenerDatos = async() =>{
         const datos = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
         const users = await datos.json();
         setPueblo(users)
     }

    return (
        <div>
             <h4>{pueblo.name}</h4>
            <p>{pueblo.team_bonus}</p> 
        </div>
    )
}

export default User
