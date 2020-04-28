import * as React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { IContactFormProps } from "../../interfaces/contacts/IContactFormProps";
import { IContact } from "../../interfaces/contacts/IContact";
import { Guid } from "guid-typescript";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ActionType } from "../../interfaces/contacts/ActionType";

export default class ContactForm extends React.Component<IContactFormProps> {
  buttonRef: any;

  constructor(props: Readonly<IContactFormProps>) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleSubmit(event: any) {
    event.preventDefault();
    debugger;
    const { contact, onSave } = this.props;
    const {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      company,
      address,
    } = event.target.elements;
    if (contact) {
      const contactValue: IContact = {
        ...contact,
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        phoneNumber: phoneNumber.value,
        company: company.value,
        address: address.value,
      };
      onSave(contactValue, ActionType.EDIT);
    } else {
      const newContact: IContact = {
        contactId: Guid.create().toString(),
        firstName: firstName.value,
        lastName: lastName.value,
        emailAddress: emailAddress.value,
        phoneNumber: phoneNumber.value,
        company: company.value,
        address: address.value,
        isLoggedIn: false,
        isSelected: false,
        messages: [],
        creationDate: new Date().toString(),
        isChecked: false,
      };
      onSave(newContact, ActionType.ADD);
    }
  }

  render() {
    const { contact } = this.props;
    return (
      <Modal
        show={true}
        animation={true}
        size="lg"
        centered
        autoFocus={true}
        onHide={() => this.props.onModalClose()}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue={contact ? contact.firstName : ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    First Name is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="lastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue={contact ? contact.lastName : ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    Last Name is required
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="6" controlId="emailAddress">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter mail address"
                    defaultValue={contact ? contact.emailAddress : ""}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter valid mail address
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="phoneNumber">
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter telephone number"
                    defaultValue={contact ? contact.phoneNumber : ""}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    defaultValue={contact ? contact.company : ""}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    defaultValue={contact ? contact.address : ""}
                  />
                </Form.Group>
              </Form.Row>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => this.props.onModalClose()}
                >
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}
