import * as React from "react";
import plus from "../assets/svg/plus.svg";
import edit from "../assets/svg/edit.svg";
import trash from "../assets/svg/trash.svg";
import mail from "../assets/svg/mail.svg";
import { IContactState } from "../interfaces/contacts/IContactState";
import { IContactProps } from "../interfaces/contacts/IContactProps";
import "../contacts/Contact.scss";
import { IContact } from "../interfaces/contacts/IContact";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ContactForm from "./ContactForm/ContactForm";
import { ActionType } from "../interfaces/contacts/ActionType";
import ChatContainer from "./ChatContainer/ChatContainer";

const CommandTypes = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  CONFIRMATION: "CONFIRMATION",
};

export default class Contacts extends React.Component<
  IContactProps,
  IContactState
> {
  constructor(props: Readonly<IContactProps>) {
    super(props);

    this.state = {
      displayContact: null,
      currentCommandType: "",
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(
    prevProps: IContactProps,
    nextProps: IContactProps
  ) {
    console.log(prevProps);
    console.log(nextProps);
    const { displayContact } = this.state;
    if (displayContact) {
      if (prevProps.loggedInContact === displayContact) {
        this.setState({
          displayContact: null,
        });
      }
    }
  }

  selectContact(contact: IContact) {
    this.setState({
      displayContact: contact,
    });
  }

  createOrUpdateContact(contact: IContact, type: ActionType) {
    this.setState(
      {
        currentCommandType: "",
      },
      () => {
        if (type === ActionType.ADD) {
          this.props.createContact(contact);
        }

        if (type === ActionType.EDIT) {
          this.props.updateContact(contact);
        }
      }
    );
  }

  openCommands(type: string) {
    this.setState({
      currentCommandType: type,
    });
  }

  handleClose() {
    this.setState({
      currentCommandType: "",
    });
  }

  deleteConfimation() {
    const contact = { ...this.state.displayContact };
    this.setState(
      {
        displayContact: null,
        currentCommandType: "",
      },
      () => {
        this.props.deleteContact(contact.contactId);
      }
    );
  }

  render() {
    const { contacts, onSearchContact } = this.props;
    const { displayContact, currentCommandType } = this.state;

    let command: JSX.Element = null;

    switch (currentCommandType) {
      case CommandTypes.CREATE: {
        command = (
          <ContactForm
            headerTitle="Update Contact"
            contact={null}
            onSave={this.createOrUpdateContact.bind(this)}
            onModalClose={this.handleClose.bind(this)}
          />
        );
        break;
      }

      case CommandTypes.UPDATE: {
        command = (
          <ContactForm
            headerTitle="Update Contact"
            contact={displayContact}
            onSave={this.createOrUpdateContact.bind(this)}
            onModalClose={this.handleClose.bind(this)}
          />
        );
        break;
      }

      case CommandTypes.CONFIRMATION: {
        command = (
          <Modal show={true} onHide={() => this.handleClose()} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to perform this action ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => this.deleteConfimation()}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        );
        break;
      }
    }

    return (
      <div className="row contactContainer">
        <div className="col-md-5 contactLeft">
          {/* Contacts Header */}
          <div className="row">
            <div className="col-md-5">
              <h3>Contacts</h3>
              <p>Welcome to FlatCRM Contact Page</p>
            </div>

            <div className="col-md-5">
              <label>Sort by:</label>
              <select name="Select login contact">
                <option key="1" value="Date Created">
                  Date Created
                </option>
                <option key="2" value="Company">
                  Company
                </option>
                <option key="3" value="First Name">
                  First Name
                </option>
                <option key="4" value="LastName">
                  LastName
                </option>
                }
              </select>
            </div>
          </div>
          {/* End of Contact Header */}

          {/* Actions */}
          <form className="form-inline mt-5">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search Contacts"
                className="form-control searchField"
                id="search"
                onChange={(e) => onSearchContact(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary ml-3"
              onClick={() => this.openCommands(CommandTypes.CREATE)}
            >
              Add Contact
            </button>
          </form>
          {/* End of Actions */}

          {/* Contact Table View */}
          <table className="table table-borderless mt-5">
            <thead>
              <tr>
                <th>
                  <img width="10" src={plus} alt="plus" />
                </th>
                <th>Basic Info</th>
                <th>Company</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={contact.contactId}
                  onClick={() => this.selectContact(contact)}
                >
                  <td>
                    <input type="checkbox" className="form-control checkBox" />
                  </td>
                  <td>
                    <div className="row">
                      <div className="col profImg">
                        {contact.firstName[0].toUpperCase()}
                        {contact.lastName[0].toUpperCase()}
                      </div>
                      <div className="col -md-12">
                        <h6>
                          {contact.firstName} {contact.lastName}
                        </h6>
                        <p>{contact.emailAddress}</p>
                      </div>
                    </div>
                  </td>
                  <td>{contact.company}</td>
                  <td>
                    <img
                      width="20"
                      src={mail}
                      title="mail"
                      onClick={(e) => e.preventDefault()}
                      alt="mail"
                    />
                  </td>
                  <td>
                    <img
                      width="20"
                      src={edit}
                      title="edit"
                      alt="edit"
                      onClick={() => this.openCommands(CommandTypes.UPDATE)}
                    />
                  </td>
                  <td>
                    <img
                      width="20"
                      src={trash}
                      title="delete"
                      alt="delete"
                      onClick={() =>
                        this.openCommands(CommandTypes.CONFIRMATION)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* End of Contact Table View */}
        </div>

        {/* Display Contact & Chat Box */}
        <div className="col-md-5 contactRight">
          {displayContact && (
            // Display Contact Information
            <div className="sideBlock">
              <div className="sideBlockheader">
                <div className="sideBlockImg">
                  {displayContact.firstName[0].toUpperCase()}
                  {displayContact.lastName[0].toUpperCase()}
                </div>
                <h5>
                  {displayContact.firstName} {displayContact.lastName}
                </h5>
                <p className="small">Product Manager @ CRM Management</p>
              </div>
              <table className="table mt-5">
                <tbody>
                  <tr>
                    <td>Full Name :</td>
                    <td>
                      {displayContact.firstName} {displayContact.lastName}
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{displayContact.emailAddress}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{displayContact.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td>{displayContact.company}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>
                      <address>{displayContact.address}</address>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            // End of Display Contact Information
          )}

            {/* Modal Dialog */}
          {command} 

            {/* Chat Container */}
          <div style={{ padding: "15px" }}>
            <div className="row">
              {displayContact ? (
                <ChatContainer
                  loggedInContact={this.props.loggedInContact}
                  sendMessage={this.props.sendMessage.bind(this)}
                  selectedContact={displayContact}
                />
              ) : null}
            </div>
          </div>
          {/* End of Chat Container */}
        </div>
      </div>
    );
  }
}
