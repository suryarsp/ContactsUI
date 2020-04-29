import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import send from "../../assets/svg/send.svg";
import "./ChatContainer.scss";
import { IChatContainerProps } from "../../interfaces/chatContainer/IChatContainerProps";
import { IChatContainerState } from "../../interfaces/chatContainer/IChatContainerState";
import { IMessage } from "../../interfaces/contacts/IMessage";
import { MessageType } from "../../interfaces/contacts/MessageType";
import TimeAgo from "timeago-react";

export default class ChatContainer extends React.Component<
  IChatContainerProps,
  IChatContainerState
> {
  constructor(props: Readonly<IChatContainerProps>) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onClickSend() {
    this.props.sendMessage(this.props.selectedContact, this.state.message);
    this.setState({
      message: "",
    });
  }

  getMessagesByLogin(messages: IMessage[]): IMessage[] {
    if (messages.length === 0) {
      return [];
    }

    const filteredMessages = messages.filter((m) => {
      if (m.from) {
        const contact = m.from;
        if (contact.id === this.props.loggedInContact.contactId) {
          return true;
        }
      }
      if (m.to) {
        const contact = m.to;
        if (contact.id === this.props.loggedInContact.contactId) {
          return true;
        }
      }

      return false;
    });
    return filteredMessages;
  }

  render() {
    const { selectedContact } = this.props;
    const messages = this.getMessagesByLogin(selectedContact.messages);
    return (
      <Card style={{ width: "100%" }}>
        <Card.Header className="text-left">
          {selectedContact.firstName} {selectedContact.lastName}
        </Card.Header>
        <Card.Body>
          {messages.length > 0
            ? messages.map((message) => (
                <Row key={message.message}>
                  <Col md={6}>
                    {message.messageType === MessageType.RECIEVED ? (
                      <>
                        <div className="displayName">
                          <div className="avatar">
                            <i> {message.from.name}</i>
                          </div>
                        </div>
                        <div className="text-left message-recieved">
                          <p>
                            {message.message}
                            <em>
                              <TimeAgo
                                className="time"
                                datetime={message.date}
                              />
                            </em>
                          </p>
                        </div>
                      </>
                    ) : null}
                  </Col>
                  <Col md={6}>
                    {message.messageType === MessageType.SENT ? (
                      <>
                        <div className="receiver-name">
                          <div className="avatar">
                            <i>
                              {" "}
                              {selectedContact.firstName}{" "}
                              {selectedContact.lastName}
                            </i>
                          </div>
                        </div>
                        <div className="text-right message-sent">
                          <p>
                            {message.message}
                            <em>
                              <TimeAgo
                                className="time"
                                datetime={message.date}
                              />
                            </em>
                          </p>
                        </div>
                      </>
                    ) : null}
                  </Col>
                </Row>
              ))
            : null}
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row>
            <Col md={10}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Type something to send"
                  className="form-control"
                  id="email"
                  onChange={(e) => {
                    this.setState({ message: e.target.value });
                  }}
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="snd-btn" onClick={() => this.onClickSend()}>
                <img width={20} src={send} alt="send"></img>
              </div>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}
