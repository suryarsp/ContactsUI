import { IContact } from "../contacts/IContact";

export interface IChatContainerProps {
    loggedInContact: IContact;
    selectedContact: IContact;
    sendMessage: (reciever: IContact, message: string) => void;
}