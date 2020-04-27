import { IContact } from "./IContact";

export interface IContactState {
    contacts: IContact[];
    createContact: (contact: IContact) => void;
    updateContact: (contact: IContact) => void;
    deleteContact: (contactId: string) => void;
    sendMessage: (reciever: IContact, message: string) => void;
}