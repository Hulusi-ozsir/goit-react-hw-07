import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactItem.module.css";

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <span className={css.name}>{name}</span>
      <span className={css.phone}>{phone}</span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default ContactItem;
