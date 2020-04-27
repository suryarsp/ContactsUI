import { IContact } from "./IContact";

export interface IContactProps {
    contacts: IContact[];
    createContact: (contact: IContact) => void;
    updateContact: (contact: IContact) => void;
    deleteContact: (contactId: string) => void;
    sendMessage: (reciever: IContact, message: string) => void;
    onSearchContact: (value: string) => void;
}