import { createSlice, nanoid } from '@reduxjs/toolkit';
import { appInitState } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: appInitState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ username, phone }) {
        return {
          payload: { id: nanoid(), username, phone },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.reduce((acc, contact) => {
        if (contact.id !== action.payload) acc.push(contact);
        return acc;
      }, []);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
