import { IMessage } from "./IMessage";

export interface IContact {
    contactId: string;
   firstName: string;
   lastName: string;
   emailAddress: string;
   company: string;
   address: string;
   isLoggedIn: boolean;
   phoneNumber: string;
   messages: IMessage[];
   isSelected: boolean;
   creationDate ?: string;
}