// import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";

function App() {
  // useEffect(() => {
  //   const storageContacts = localStorage.getItem("contacts");
  //   const storageContactsParced = JSON.parse(storageContacts);

  //   if (storageContactsParced) {
  //     setContacts([...storageContactsParced]);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
