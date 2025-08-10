import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((c) => (
        <ContactItem
          key={c.id}
          id={c.id}
          name={c.name}
          phone={c.phone ?? c.number ?? ""}
        />
      ))}
    </ul>
  );
};

export default ContactList;
