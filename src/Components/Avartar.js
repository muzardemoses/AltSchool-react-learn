import React from "react";
import "../Assets/Styles/avartar.css";


const Avartar = ({image="", alt="muzarde-img"}) => (
	<img
		className="card-image"
		//src="https://www.w3schools.com/w3images/avatar2.png"
		alt={alt}
		src={image}
		// style={{ width: "100%" }}
	/>
);

export default Avartar;
