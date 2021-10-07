import { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import { Form, Label, Input, Button } from "./ContactForm.styled";

function ContactForm({stateContacts, addContact}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    newContact();
    setName("");
    setNumber("");
  };

    const notify = (name) => toast(`${name} is already in contacts`);


  const newContact = () => {
    const contactToAdd = {
      name,
      number,
    };

    stateContacts.contacts.items.some((contact) => contact.contactName === contactToAdd.name)
      ? notify(contactToAdd.name)
      : addContact(name, number);
  }
  
  return (
    <Form action="" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        onChange={handleChange}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
  

      <Button type="submit">Add contact</Button>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#f8cd98",
            color: "#000",
          },
        }}
      />
    </Form>
  );
}

const mapStateToProps = state => ({
  stateContacts: state,
});


const mapDispatchToProps = dispatch => ({
  addContact: (contactName, number) => dispatch(addContact(contactName, number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
