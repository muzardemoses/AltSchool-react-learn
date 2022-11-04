import React from "react";
import {  NavLink, Route, Routes, useNavigate } from "react-router-dom";

//Create a homepage component
const Home = () => {

//How to use the navigate hook 
const navigate = useNavigate();

//Handle navigation to the about page
const handleNavigation = (e) => {
	e.preventDefault();
	navigate("/about");
}

	return (
		<section className="home-container">
			<h1>Home Page</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
			<p>Click the link below to go to the about page</p>
			<Navigation />
			<div>
			 <button onClick={handleNavigation}>Go to About Page</button>
		 </div>
		</section>
	);
};

//create a component for the about page
const About = () => {
   
 

	return (
		<section className="about-container">
			<h1>About</h1>
			<p>This is the about page</p>
			<Navigation /> 
		</section>
	);
};

//Create a navigation component
const Navigation = () => {
	return <section className="navigation">
	<NavLink
		style={({ isActive }) =>
			isActive ? { color: "white" } : { color: "black" }
		}
		className="navigate"
		to="/"
	>
		Home Page
	</NavLink>
	<NavLink
		style={({ isActive }) =>
			isActive ? { color: "white" } : { color: "black" }
		}
		className="navigate"
		to="/about"
	>
		About Page
	</NavLink>
</section>
}
      
      <Routes>
        			<p>Click the link below to go to the about page</p>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>