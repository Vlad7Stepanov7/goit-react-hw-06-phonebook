import PropTypes from 'prop-types';
import { node } from 'prop-types';
import { ListItem, ButtonDelete, TextContact } from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
       <ul>{contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <TextContact>{name}: {number}</TextContact>
            <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
          </ListItem>
        )
      })}</ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,

    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;