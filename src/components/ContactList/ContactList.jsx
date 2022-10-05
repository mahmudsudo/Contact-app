import React from 'react';
import {ContactCard} from "./../ContactCard/ContactCard";
import { Link } from 'react-router-dom';
export const ContactList = ({contacts, getContId}) => {
const del = (id) =>{
  getContId(id)
}
    const renderCont = contacts.map((contact) => {
        return (
   <ContactCard contact={contact} key={contact.id}  handler={del}/>
  )
    })
  return ( 
    <div >
      <h2>Contact List
        <Link to="/add">
        <button className="ui button blue right floated " >
          Add
        </button>
        </Link>
      </h2>
  <div className="ui celled list">
    {renderCont}
  </div>
  </div>
  )
}
