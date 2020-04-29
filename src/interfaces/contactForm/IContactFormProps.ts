import { IContact } from "../contacts/IContact";
import { ActionType } from "../contacts/ActionType";

export interface IContactFormProps {
    contact:IContact;
    headerTitle: string;
    onSave: (contact: IContact, type: ActionType) => void;
    onModalClose: () => void;
}