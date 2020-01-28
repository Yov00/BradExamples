import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "professional"
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "professional"
  });
  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrent();
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "professional"
    });
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary text-center">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="Name.."
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email..."
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone..."
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        id="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      <label htmlFor="personal"> Personal </label>

      <input
        type="radio"
        name="type"
        value="professional"
        id="Professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      <label htmlFor="Professional"> Professional</label>
      <div>
        <input
          type="submit"
          value={current ? "Update " : "Add "}
          className="btn btn-primary btn-block"
        />
        {current && (
          <div>
            <buttn
              className="btn btn-light btn-block text-center"
              onClick={clearAll}
            >
              Clear
            </buttn>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
