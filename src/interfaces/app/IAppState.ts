import { IContact } from "../contacts/IContact";

export interface IAppState {
    loggedInContact: IContact;
    contacts: IContact[];
    displayContacts: IContact[];
    filteredContacts: IContact[];
}