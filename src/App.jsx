import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectFilteredContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const nameFilter = useSelector(selectNameFilter);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="card">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className="card">
        <Filter />
      </div>

      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h2 style={{ margin: 0 }}>Contacts</h2>
          {loading && <span>Loading...</span>}
          {error && <span style={{ color: "#f87171" }}>{error}</span>}
        </div>

        <ContactList />

        {contacts.length === 0 && !loading && !error && (
          <p>No contacts found{nameFilter ? ` for "${nameFilter}"` : ""}.</p>
        )}
      </div>
    </div>
  );
};

export default App;
