// import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
// import { connect } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";

function App() {
  // const [contacts, setContacts] = useState([]);
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

  // const notify = (name) => toast(`${name} is already in contacts`);

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   contacts.some((contact) => contact.name === newContact.name)
  //     ? notify(newContact.name)
  //     : setContacts([...contacts, newContact]);
  // };

  // const deleteContact = (id) => {
  //   return setContacts(contacts.filter((contact) => contact.id !== id));
  // };

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
      {/* <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#f8cd98",
            color: "#000",
          },
        }}
      /> */}
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      {/* <Filter onChange={handleFilter} value={filter} /> */}
      {/* <ContactList contacts={visibleContacts()} deleteId={deleteContact} /> */}
    </>
  );
}

export default App;
