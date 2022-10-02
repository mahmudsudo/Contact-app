import AddContact from "./AddContact/AddContact";
import Header from "./Header/Header";
import {ContactList} from "./ContactList/ContactList";
import './App.css';

function App() {
  let contacts = [
    {
      id: "1",name:"mahmud",email:"blinkz@gmail.com"
    },
    {
      id: "2",name:"yinka",email:"tyler@gmail.com"
    },
    {
      id: "3",name:"toyosi",email:"blinkztyler@gmail.com"
    },
    {
      id: "4",name:"alabi",email:"btyler@gmail.com"
    }
  ]
  return (
    <div className="ui raised very padded text container segment">
      <Header />
      <br/>
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
