import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IAppState } from './interfaces/app/IAppState';
import Contacts from './contacts/Contacts';
import { mockContacts } from './data/mockContacts';
import { IContact } from './interfaces/contacts/IContact';
import { MessageType } from './interfaces/contacts/MessageType';

class App extends React.Component<{}, IAppState> {
searchText: string = '';

constructor(props: Readonly<{}>) {
  super(props);
  this.state = {
    contacts: [],
    displayContacts: [],
    filteredContacts: [],
    loggedInContact: null
  }
}

componentDidMount() {
    // load with initial mock data

    const contacts = mockContacts.filter(c => c.isLoggedIn);
    this.setState({
        contacts: contacts,
        displayContacts: contacts,
        filteredContacts: contacts,
        loggedInContact: mockContacts.find(c => c.isLoggedIn)
    });
} 

  searchContact(searchString: string) {
    const searchText = searchString.trim();
    this.searchText = searchText;
    const  contacts  = [...this.state.contacts];
    if(searchString.length > 0) {
      const filteredContacts = contacts.filter((contact) => {
        if(contact.firstName.toLowerCase().includes(searchText) ||
        contact.firstName.toLowerCase().includes(searchText)    || 
        contact.firstName.toLowerCase().includes(searchText)  ) {
          return true;
        }
          return false;
      });

      this.setState({
        filteredContacts,
        displayContacts: filteredContacts
      });
    } else {
      this.setState({
        filteredContacts: contacts,
        displayContacts: contacts
      });
      this.searchText = ''
    }
  }
  
  createContact(newContact: IContact) {
    let contacts = [...this.state.contacts];
    newContact.creationDate = new Date().toString();
    contacts.push(newContact);
    
    this.setState({
      contacts
    } ,() => {
      if(this.isSearchApplied()) {
        this.searchContact(this.searchText);
      }
    });
  }

  isSearchApplied() {
    return this.searchText.length > 0;
  }

  deleteContact(contactId: string) {
    let contacts = this.state.contacts.filter(c => c.contactId !== contactId);
    this.setState({
      contacts
    });
  }

  updateContact(existingContact: IContact) {
    let contacts = this.state.contacts.map(c => c.contactId === existingContact.contactId ? existingContact: c);
    this.setState({
      contacts
    });
  }

  sendMessage(reciever: IContact, message: string) {
    const { contacts, loggedInContact} = this.state;
    const contactsData = contacts.map( contact => {
      if (contact.contactId === loggedInContact.contactId) {
        contact.messages.push({
          date: new Date(),
          message,
          messageType: MessageType.SENT,
          to: {
            id: reciever.contactId,
            name: reciever.firstName + ' ' + reciever.lastName
          }
        });
      }

      if (contact.contactId === reciever.contactId) {
        contact.messages.push({
          date: new Date(),
          message,
          messageType: MessageType.RECIEVED,
          from: {
            id: loggedInContact.contactId,
            name: loggedInContact.firstName + ' ' + loggedInContact.lastName
          }
        });
      }
      return contact;
    });

    this.setState({
      contacts: contactsData
    })
  }

  render () {
    const contacts = this.state.displayContacts.filter(c => !c.isLoggedIn);
    return (
    <div className="App">
      {/* Vertical Menu*/}
      <div className="vertical-menu"></div>

      {/* Top Bar */}
      <div className="top-bar"> </div>

      <div className="container-fluid">
        {/* Contacts App */}    
        <Contacts 
        contacts={contacts}
        createContact={this.createContact.bind(this)}
        updateContact={this.updateContact.bind(this)}
        deleteContact={this.deleteContact.bind(this)}
        sendMessage={this.sendMessage.bind(this)}
        />
      </div>
    </div>
  );
}
}

export default App;
