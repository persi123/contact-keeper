import React, { useContext, useRef, useEffect } from "react";
import contactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const text = useRef("");
  const ContactContext = useContext(contactContext);
  const { filterContacts, clearFilter, filtered } = ContactContext;

  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  }, [filtered]);

  const handleChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        ref={text}
        placeholder="Filter contacts.."
        onChange={handleChange}
      />
    </form>
  );
};

export default ContactFilter;
