import { toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {contacts: []},
    reducers: {
        addContact(state, action) {
            const isContact = state.contacts.find(contact => (
                contact.name === action.payload.name ||
                contact.number === action.payload.number
                ));
            
            if (isContact) {
                toast.warning("There is already a contact or a number")
                return;
            }
            return {
                contacts: [...state.contacts, action.payload]
            }
        },
        deleteContact(state, action) {
            return {
              contacts: state.contacts.filter(contact => contact.id !== action.payload.id)
          }
        }
    }
})

const persistConfig = {
    key: "contacts",
    storage
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions; 