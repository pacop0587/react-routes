import { useState } from 'react'
import './App.css'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
  } from "react-router-dom";
  import Contacto from './components/Contacto';
  import Nosotros from './components/Nosotros';
import User from './components/User';

function App() {


  return (
	  <BrowserRouter>
			<div className="container mt-5">
				<h1>Hola Mundo desde React</h1>
				<hr />
				<div className="btn-group mb-2">
					<Link to="/nosotros" className='btn btn-dark mx-1'>Nosostros</Link>
					<Link to="/contacto" className='btn btn-dark mx-1'>Contacto</Link>
				</div>
				<hr />
				<Routes>
					<Route path="/nosotros/:id" element={<User />}/>
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/nosotros" element={<Nosotros />} />
				</Routes>
			</div>
	 </BrowserRouter>
  )
}

export default App
