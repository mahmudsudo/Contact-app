import AddContact from "./AddContact/AddContact";
import Header from "./Header/Header";
import {Routes,Route } from "react-router-dom";
import { v4 } from "uuid"
import { ContactList } from "./ContactList/ContactList";
import './App.css';
import { useEffect, useState } from "react";
import {ContactDetail} from "./ContactDetails"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const rContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const [contacts, setContacts] = useState(rContacts || []);
  const AddContactHandler = (contact) => {
    setContacts([...contacts, { id: v4(), ...contact }])
  }
 useEffect(() => {
    // console.log(contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    
  }, [contacts]);
  const remove = (id) => {
    const newCont = contacts.filter((contact) => {
      return contact.id !== id
    });
    setContacts(newCont);
  }
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
  //   if (contacts){setContacts(contacts)}
  // }, []);


 

  return (
    <div className="ui raised very padded text container segment">
      <Header />
      
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContId ={remove} />}/> 
          <Route path="/contact" element={<ContactList contacts={contacts} getContId ={remove} />}/> 
          <Route path="/add" element={ <AddContact AddContactHandler={AddContactHandler}/>}  />
          <Route path="/contact/:id" element={ <ContactDetail />}/>
          </Routes>
    
    </div>

  );
}

export default App;
