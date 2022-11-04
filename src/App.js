import React from "react";
import { Home } from "./pages";
import Pagination from "./Components/pagination";
// import {  NavLink, Route, Routes, useNavigate } from "react-router-dom";


//create our root component => App component
const App = () => {

//   //Create a homepage component
// const Home = () => {

// 	//How to use the navigate hook 
// 	const navigate = useNavigate();
	
// 	//Handle navigation to the about page
// 	const handleNavigation = (e) => {
// 		e.preventDefault();
// 		navigate("/about");
// 	}
	
// 		return (
// 			<section className="home-container">
// 				<h1>Home Page</h1>
// 				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
// 				<p>Click the link below to go to the about page</p>
// 				<Navigation />
// 				<div>
// 				 <button onClick={handleNavigation}>Go to About Page</button>
// 			 </div>
// 			</section>
// 		);
// 	};
	
// 	//create a component for the about page
// 	const About = () => {
		 
	 
	
// 		return (
// 			<section className="about-container">
// 				<h1>About</h1>
// 				<p>This is the about page</p>
// 				<Navigation /> 
// 			</section>
// 		);
// 	};

// 	//Create a navigation component
// const Navigation = () => {
// 	return <section className="navigation">
// 	<NavLink
// 		style={({ isActive }) =>
// 			isActive ? { color: "white" } : { color: "black" }
// 		}
// 		className="navigate"
// 		to="/"
// 	>
// 		Home Page
// 	</NavLink>
// 	<NavLink
// 		style={({ isActive }) =>
// 			isActive ? { color: "white" } : { color: "black" }
// 		}
// 		className="navigate"
// 		to="/about"
// 	>
// 		About Page
// 	</NavLink>
// </section>
// }
	return (
		<section className="main-container">
			<Home />
			{/* <Routes>
        
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes> */}
			<Pagination />
		</section>
	);
};

// const users = [{
//   name: "Elon Musk",
//   bio: "Elon Musk is the CEO of Tesla and also the richest;",
//   avatar: "https://www.biography.com/.image/t_share/MTQ1MzMzNzIzOTgxNDcxNzIw/elon_musk_royal_society.jpg"
// }, {
//   name: "Jeff Bezos",
//   bio: "Jeff Bezos is the CEO of Amazon and also the richest;",
//   avatar:"https://www.biography.com/.image/t_share/MTQ1MzMzNzIzOTgxNDcxNzIw/elon_musk_royal_society.jpg",
// }]

// const usersList = users.map(user => {
//   return <div>
//     <img src={user.avatar} alt={user.name} style={{ width: 100 }} />
//     <h3>{user.name}</h3>
//     <p>{user.bio}</p>
//   </div>
// })

// //CARS LIST
// const cars = ["Tesla", "BMW", "Audi", "Mercedes"];
// const listsitems = cars.map((car) => {
//   return <li key={car}>{car}</li>
// });
// return (
//   <ol>
//     {listsitems}
//   </ol>
//// )

// //Increment and Decrement
//  //State...
//  const [counter, setCounter] = useState(0);

//  //Handle Increment
//  const handleIncrement = (event) => {
//    event.preventDefault();
//    setCounter(before => before + 1);
//    console.log(counter);
//  }

//  //Handle Decrement
//  const handleDecrement = (event) => {
//    event.preventDefault();
//    setCounter(before => before - 1);
//    console.log("Decrementing...");
//  }
// // Handle Render
// return (
//   <section className="counter-container">
//     <div className="counter-label">{ counter}</div>
//     <button className="action-btn" onClick={handleIncrement}>Increment</button>
//     <button className="action-btn" onClick={handleDecrement}>Decrement</button>
//   </section>
// )

// const [state , setState] = useState("Hello World");

// //handle mouse over event
//  const handleMouseOver = () => {
//    setState("Hello Everyone");
//    setTimeout(() => {
//      setState("Hello World");
//    }, 1000);
//  }
//  return (
//  <section className="main-container">
//    <h1 onMouseOver={e =>{
//      handleMouseOver();
//    }} className="hover-me">
//        {state}
//    </h1>
//  </section>
//  )
export default App;
