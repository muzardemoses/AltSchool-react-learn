import React from "react";
import Avatar from "./Avartar";
import '../Assets/Styles/card.css'

const UserProfileCard = () => {
  return (<div className="card">
    <Avatar />
    <div className="card-name"> Elon Musk</div>
    <div className> Elon Musk is the CEO of Tesla and also the richest man in the world</div>
  </div>)
}



export default UserProfileCard