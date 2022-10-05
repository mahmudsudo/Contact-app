import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
 
class AddContact extends Component {
  state ={
    name: "",email:""
  }
  
  add =(e) => {
    window.console.log("was clicked");
    e.preventDefault();
    if (this.state.name ==="" || this.state.email==="") {
      alert("all fields are mandatory");
      return
    }
    
    this.props.AddContactHandler(this.state);
    this.setState({
      name:"",email: ""
    });
  this.props.navigate("/contact")
  }
 
  render() {
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            
        <form className='ui form' onSubmit={this.add}>
        <div className='field'>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            name="name"
            value={this.state.name}
             id="" placeholder='Name' 
             onChange={(e) =>this.setState({
              name:e.target.value
            })}/>
        </div>
        <div className='field'>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            value={this.state.email} 
            name="email" 
            id="" placeholder='Email'
            onChange={(e) =>this.setState({
              email:e.target.value
            })}/>
        </div>
        
        <button className="ui button blue " > Add </button>
        <Link to="/contact">
        <button className="ui button green right floated" > Contacts </button>
</Link>
        
      </form>
      </div>
      
    )
  }
}
function WithNavigate(props){
  let navigate = useNavigate();
  return <AddContact {...props} navigate={navigate} />
}
export default WithNavigate;