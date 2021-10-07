// import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
// import { connect } from "react-redux";

function App() {
  // const [filter, setFilter] = useState("");

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

  // const handleFilter = (text) => {
  //   setFilter(text);
  // };

  // const visibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   if (contacts !== []) {
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  // };

  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      {/* <Filter onChange={handleFilter} value={filter} /> */}
      <ContactList />
    </>
  );
}

export default App;
