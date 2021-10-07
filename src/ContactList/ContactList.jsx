import { List, ListItem, Button } from "./ContactList.styled";
import { connect } from "react-redux";
import {deleteContact} from '../redux/actions';


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <List>
        {contacts.map((contact) => {
          const { id, contactName, number } = contact;
          return (
            <ListItem key={id}>
              {contactName} - {number}
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

function mapStateToProps(state) {
  return {
  contacts: state.contacts.items,
}
}

function mapDispatchToProps(dispatch) {
  return {
    deleteContact: (id) => {dispatch(deleteContact(id))}
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
