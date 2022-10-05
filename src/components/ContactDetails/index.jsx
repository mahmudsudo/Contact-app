import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import image from "./../../images/user.jpg"
export const ContactDetail = (props) => {
    
   const {id,name,email}= useLocation().state?.contact
 return (
    <div className="main">
        <div className="ui card column stackable">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="content ">
                <div className="header">
                 Name: {name} <br></br>
                Email: {email}
                </div>
                <div className="description">
                    {id}
                </div>
            </div>
        </div>
        <Link to={`/contact`}>
            <button className=" ui button green center floated">Back to contact</button>
        </Link>
    </div>
 )
  
}
