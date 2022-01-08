import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Nosotros = () => {

    const [equipo, setEquipo] = useState([])


    useEffect( () =>{
        obtenerDatos()
    },[])

    const obtenerDatos = async() =>{
        const datos = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const users = await datos.json();
        console.log(users)
        setEquipo(users.civilizations)
    }


    return (
        <div className='container'>
            <h2>Nosotros</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem repellendus odio minus, blanditiis totam a temporibus, eius provident nulla, ipsum odit repudiandae! Voluptates quidem facere adipisci numquam repellat error eaque.</p>
            <ul>
                {
                    equipo.map( (item) =>(
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
