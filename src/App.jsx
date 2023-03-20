import React from "react";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes";
import './App.css'

export default function App() {
	let router = useRoutes(routes);

	return (
		<>
			<Topbar />
			<div className='container'>
				{router}
				<Sidebar />
			</div>
		</>
	);
}
