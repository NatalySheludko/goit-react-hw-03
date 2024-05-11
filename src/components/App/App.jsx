import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
//import defaultContacts from "../../defaultContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [filter, setFilter] = useState("");

  const addContact = (newUser) => {
    //console.log(newUser);
    setContacts((currContacts) => {
      return [...currContacts, newUser];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteUser = (contactId) => {
    setContacts((currContacts) => {
      return currContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );

 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={deleteUser} />
    </div>
  );
}
