import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import defaultContacts from "../../defaultContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(defaultContacts); //початкове значення стану
  const [filter, setFilter] = useState("");

  const addContact = (newUser) => {
    //newUser = values, nanoid
    console.log(newUser);
    setContacts((currContacts) => {
      //currContacts значення стану на момент оновлення
      return [...currContacts, newUser]; //return новий стан, створюємо новий масив
    });
  };

  const deleteUser = (contactId) => {
    setContacts((currContacts) => {
      return currContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter(
    (userContact) =>
      userContact.name &&
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
