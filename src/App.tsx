/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import menu from "./assets/svg/menu.svg";
import plus from "./assets/svg/plus.svg";
import person from "./assets/svg/user.svg";
import sheet from "./assets/svg/form.svg";
import storage from "./assets/svg/database.svg";
import calendar from "./assets/svg/calendar.svg";
import clock from "./assets/svg/clock.svg";
import settings from "./assets/svg/settings.svg";
import search from "./assets/svg/search.svg";
import notification from "./assets/svg/notification.svg";
import mail from "./assets/svg/mail.svg";

import { IAppState } from "./interfaces/app/IAppState";
import Contacts from "./contacts/Contacts";
import { mockContacts } from "./data/mockContacts";
import { IContact } from "./interfaces/contacts/IContact";
import { MessageType } from "./interfaces/contacts/MessageType";

import "./App.scss";

class App extends React.Component<{}, IAppState> {
  searchText: string = "";

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      contacts: mockContacts,
      displayContacts: mockContacts,
      filteredContacts: mockContacts,
      loggedInContact: mockContacts.find((c) => c.isLoggedIn),
    };
  }

  searchContact(searchString: string) {
    const searchText = searchString.trim();
    this.searchText = searchText;
    const contacts = [...this.state.contacts];
    if (searchString.length > 0) {
      const filteredContacts = contacts.filter((contact) => {
        if (
          contact.firstName.toLowerCase().includes(searchText) ||
          contact.firstName.toLowerCase().includes(searchText) ||
          contact.firstName.toLowerCase().includes(searchText)
        ) {
          return true;
        }
        return false;
      });

      this.setState({
        filteredContacts,
        displayContacts: filteredContacts,
      });
    } else {
      this.setState({
        filteredContacts: contacts,
        displayContacts: contacts,
      });
      this.searchText = "";
    }
  }

  createContact(newContact: IContact) {
    let contacts = [...this.state.contacts];
    newContact.creationDate = new Date().toString();
    contacts.push(newContact);

    this.setState(
      {
        contacts,
        filteredContacts: contacts,
        displayContacts: contacts,
      },
      () => {
        if (this.isSearchApplied()) {
          this.searchContact(this.searchText);
        }
      }
    );
  }

  isSearchApplied() {
    return this.searchText.length > 0;
  }

  deleteContact(contactId: string) {
    let contacts = this.state.contacts.filter((c) => c.contactId !== contactId);
    this.setState({
      contacts,
      filteredContacts: contacts,
      displayContacts: contacts,
    });
  }

  updateContact(existingContact: IContact) {
    let contacts = this.state.contacts.map((c) =>
      c.contactId === existingContact.contactId ? existingContact : c
    );
    this.setState({
      contacts,
      filteredContacts: contacts,
      displayContacts: contacts,
    });
  }

  sendMessage(reciever: IContact, message: string) {
    const { contacts, loggedInContact } = this.state;
    const contactsData = contacts.map((contact) => {
      if (contact.contactId === loggedInContact.contactId) {
        contact.messages.push({
          date: new Date(),
          message,
          messageType: MessageType.SENT,
          to: {
            id: reciever.contactId,
            name: reciever.firstName + " " + reciever.lastName,
          },
        });
      }

      if (contact.contactId === reciever.contactId) {
        contact.messages.push({
          date: new Date(),
          message,
          messageType: MessageType.RECIEVED,
          from: {
            id: loggedInContact.contactId,
            name: loggedInContact.firstName + " " + loggedInContact.lastName,
          },
        });
      }
      return contact;
    });

    this.setState({
      contacts: contactsData,
      filteredContacts: contactsData,
      displayContacts: contactsData,
    });
  }

  onChangeLoginContact(id: string) {
    let allContacts = [...this.state.contacts];
    let contacts = allContacts.map((ct) => {
      if (ct.contactId === id) {
        ct.isLoggedIn = true;
      } else {
        ct.isLoggedIn = false;
      }
      return ct;
    });
    this.setState({
      contacts,
      filteredContacts: contacts,
      displayContacts: contacts,
      loggedInContact: contacts.find((c) => c.isLoggedIn),
    });
  }

  render() {
    const displayContacts = this.state.displayContacts.filter(
      (c) => !c.isLoggedIn
    );
    const { contacts, loggedInContact } = this.state;
    return (
      <div className="container-fluid">
        {/* Side Menu */}
        <div className="row">
          <div className="col sidemenuContainer">
            <a
              className="topMenu"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img width="20" src={menu} alt="" title="Menu"/>
            </a>
            <ul className="sideMenu">
              <li className="active">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={person} alt="" title="Contacts"/>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={sheet} alt="" title="Reports"/>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={clock} alt="" title="Activity"/>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={storage} alt="" title="Storage"/>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={calendar} alt="" title="Calendar"/>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <img width="20" src={settings} alt="" title="Settings"/>
                </a>
              </li>
            </ul>
          </div>
              {/* End Of Side Menu */}


          <div className="col">
            {/* Top Bar  */}
            <header>
              <div className="row m-0 justify-content-center h-100">
                <div className="col-md-8 p-0">
                  <div className="searchContainer h-100">
                    <span className="searchIcon">
                      <img width="10" src={search} alt="" title="Main Search"/>
                    </span>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-4 p-0 d-flex justify-content-end">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="profileAction"
                  >
                    <img width="10" src={plus} alt="" title="Add"/>
                    Add
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="profileAction"
                  >
                    <img width="15" src={mail} alt="" title="mail"/>
                  </a>
                  <span>
                    <select
                      name="Select login contact"
                      value={loggedInContact.contactId}
                      onChange={(e) =>
                        this.onChangeLoginContact(e.target.value)
                      }
                    >
                      {contacts.map((c) => (
                        <option key={c.contactId} value={c.contactId}>
                          {c.firstName} {c.lastName}
                        </option>
                      ))}
                    </select>
                  </span>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="profileAction"
                  >
                    <img width="15" src={notification} alt="" title="notifications"/>
                  </a>
                </div>
              </div>
            </header>

            {/* End of Top Bar */}

            {/* Container */}
            {/* Contacts App */}
            <Contacts
              contacts={displayContacts}
              createContact={this.createContact.bind(this)}
              updateContact={this.updateContact.bind(this)}
              deleteContact={this.deleteContact.bind(this)}
              sendMessage={this.sendMessage.bind(this)}
              onSearchContact={this.searchContact.bind(this)}
              loggedInContact={loggedInContact}
            />

            {/* End of Container */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
