import * as React from "react";
import plus from "../assets/svg/plus.svg";
import edit from '../assets/svg/edit.svg';
import trash from '../assets/svg/trash.svg';
import mail from '../assets/svg/mail.svg';
import { IContactState } from "../interfaces/contacts/IContactState";
import { IContactProps } from "../interfaces/contacts/IContactProps";
import "../contacts/Contact.scss";
import { IContact } from "../interfaces/contacts/IContact";

export default class Contacts extends React.Component<
  IContactProps,
  IContactState
> {
    constructor(props: Readonly<IContactProps>) {
        super(props);
        
        this.state = {
            selectedContact: null
        }
    }

    componentDidMount() {
        
    }

    selectContact(contact: IContact) {
      contact.isSelected = !contact.isSelected;
        this.setState({
            selectedContact: contact.isSelected ? contact : null
        });
    }

  render() {
    
    const { contacts, onSearchContact } = this.props;
    const { selectedContact } = this.state;
    console.log(contacts,selectedContact);
    return (
            <div className="row justify-content-around">
              <div className="col-md-5 contactLeft">
                <div className="row">
                  <div className="col-md-5">
                    <h3>Contacts</h3>
                    <p>Include Stateforese asdasda</p>
                  </div>

                  <div className="col-md-5">
                    <label>
                      Sort by:
                    </label>
                    <select name="Select login contact">
                    <option key="1" value="Date Created">Date Created</option>
                    <option key="2" value="Company">Company</option>
                    <option key="3" value="First Name">First Name</option>
                    <option key="4" value="LastName">LastName</option>
                }
              </select>
                  </div>
                </div>
                <form className="form-inline mt-5" action="/action_page.php">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Search Contacts"
                      className="form-control searchField"
                      id="email"
                      onChange={(e) => onSearchContact(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary ml-3">
                    Add Contact
                  </button>
                </form>
                <table className="table table-borderless mt-5">
                  <thead>
                    <tr>
                      <th>
                        <img width="10" src={plus} />
                      </th>
                      <th>Basic Info</th>
                      <th>Company</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          contacts.map((contact, index) => (
                    <tr key={contact.contactId} onClick={() => this.selectContact(contact)}>
                      <td>
                        <input
                          type="checkbox"
                          checked={contact.isSelected}
                          className="form-control checkBox"
                          onChange = { (e) => {}}
                        />
                      </td>
                      <td>
                        <div className="row">
                          <div className="col profImg">{contact.firstName[1].toUpperCase()}{contact.lastName[1].toUpperCase()}</div>
                          <div className="col -md-12">
                          <h6>{contact.firstName} {contact.lastName}</h6>
                            <p>
                              { contact.emailAddress}
                            </p>
                          </div>
                        </div>
                      </td>
                          <td>{contact.company}</td>
                          <td> 
                          <img width="20" src={mail} title='mail' onClick={(e) => e.preventDefault()}/>
                          
                          </td>
                          <td>
                          <img width="20" src={edit} title='edit'/>
                          </td>
                          <td>
                          <img width="20" src={trash} title='delete'/>
                          </td>
                    </tr>
                          ))
                      }
                  </tbody>
                </table>
              </div>
              <div className="col-md-5 contactRight">
               { selectedContact && (<div className="sideBlock">
                  <div className="sideBlockheader">
                    <div className="sideBlockImg">{selectedContact.firstName[0].toUpperCase()}{ selectedContact.lastName[0].toUpperCase()}</div>
                    <h5>{selectedContact.firstName} {selectedContact.lastName}</h5>
                    <p className="small">
                      Product Manager @ CRM Management
                    </p>
                  </div>
                  <table className="table mt-5">
                    <tbody>
                      <tr>
                        <td>Full Name :</td>
                        <td>{selectedContact.firstName} {selectedContact.lastName}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{selectedContact.emailAddress}</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>{selectedContact.phoneNumber}</td>
                      </tr>
                      <tr>
                        <td>Company</td>
                        <td>{selectedContact.company}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                           <address>{selectedContact.address}</address> 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>)}

                {/* <div className="sideBlock mt-5">
                  <div className="row">
                    <div className="col-md-2 align-self-center">
                      <img width="40" src={plus} />
                    </div>
                    <div className="col-md-8 align-self-center">
                      <h5>Cubilia a scelerisque</h5>
                      <p className="small">
                        At convallis porttitor molestie curabitur sociosqu
                        consectetur.
                      </p>
                    </div>
                    <div className="col-md-2 align-self-center text-center">
                      ...
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
    );
  }
}

