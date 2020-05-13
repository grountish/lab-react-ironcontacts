import React, { Component } from 'react'
import Card from './Card';
import contactsDB from '../contacts.json';
import '../App.css';

let splicedContacts = contactsDB.splice(0,5)

class ContactList extends Component {
  state = {
    contacts: splicedContacts
  }

  deleteTheContact = (id) => {
    const updatedContacts = this.state.contacts.filter( (contact) => {
      return (contact.id !== id);
    });
    this.setState({ contacts: updatedContacts })
  }

 addRandom = () =>{
     const randomContact = contactsDB[Math.floor(Math.random() * contactsDB.length)]
     if(this.state.contacts.indexOf(randomContact) === -1){
     const contactsToUpdate = this.state.contacts
     contactsToUpdate.push(randomContact)
     this.setState({contacts: contactsToUpdate})
    }
    else{
      this.addRandom()
    }
 }

 sortByPop =()=>{
    const sortedPop = this.state.contacts.sort((a,b)=>{return b.popularity - a.popularity  })
    this.setState({contacts:sortedPop})
 }
 sortByName =()=>{
    const sortedByName = this.state.contacts.sort((a,b)=>{return a.name.localeCompare(b.name)  })
    this.setState({contacts:sortedByName})
 }

  render() {

    return (

      <div>
        <h1>IronContacts</h1>
        <div className="addSortButtons">
        <button onClick={this.addRandom}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        </div>

        <div className="headTB">
            <h3>Picture</h3>
            <h3>Name</h3>
            <h3>Popularity</h3>
       </div>
        <ul>
      {
        this.state.contacts.map((contactObj) => {
          return(<Card key={contactObj.id} {...contactObj} removeContact={this.deleteTheContact}/>)})}
      </ul>
      </div>
    )
  }
}

export default ContactList