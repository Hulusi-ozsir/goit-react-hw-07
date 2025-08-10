import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const n = name.trim();
    const p = phone.trim();
    if (!n || !p) return;

    dispatch(addContact({ name: n, phone: p, number: p }));

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={css.input}
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
