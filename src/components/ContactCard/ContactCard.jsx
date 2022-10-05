import React from 'react'
import { Link } from 'react-router-dom';
import image from "./../../images/user.jpg"
export const ContactCard = ({ contact ,handler}) => {
  const {id, name , email} = contact;
  return (
    <div key={id} className="item">
      <img src={image} alt="user" className='ui avatar image'  />
    <div className="content  center" style={{cursor:"pointer"}}>
      <Link to={`/contact/:${id}`} state={{contact:contact}}>
        <div className="header ">{name}</div>
        <div>{email}</div>
        </Link>
   </div>
   <i
    className="trash alternate outline icon right floated " 
   style={{color:"red",marginTop:"7px" ,cursor:"pointer"}}
   onClick={ () => handler(id) }
   ></i>
   </div>
  )
}
