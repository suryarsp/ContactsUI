import { IContact } from "./IContact";
import { ActionType } from "./ActionType";

export interface IContactFormProps {
    contact:IContact;
    headerTitle: string;
    onSave: (contact: IContact, type: ActionType) => void;
    onModalClose: () => void;
}