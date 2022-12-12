import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

 
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(`contacts`)) ?? []; 
  });
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
      localStorage.setItem(`contacts`, JSON.stringify(contacts)); 
  }, [contacts])

 

  const handleDeleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }

  const addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }

    setContacts(prevContacts => [contact, ...prevContacts])
  };
 
  const handleChangeFilter = e => {
    setFilter(e.target.value)
  }
    
    const normalizedFilter = filter.toLowerCase();
    
    const filterContacts = contacts.filter(contact => {
     return contact.name.toLowerCase().includes(normalizedFilter)
    });

  return (
    <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      fontSize='40'
      color='#010101'
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contact</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filterContacts} onDeleteContact={handleDeleteContact} />
    </Box>)
  };

