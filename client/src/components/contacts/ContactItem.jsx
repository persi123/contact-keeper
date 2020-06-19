import React, { useContext } from "react";
import PropTypes from "prop-types";
import contactContext from "../../context/contact/contactContext";
import { Card, Button, Badge } from "antd";
import style from "../../style/styles.css";

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, clearCurrent } = useContext(
    contactContext
  );
  const { _id: id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  const handleEdit = () => {
    console.log(contact);
    setCurrent(contact);
  };

  return (
    <Card
      style={{ backgroundColor: "#f8f4f4", marginTop: "10px", height: "165px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="text-primary text-left">{name} </h3>
        {type === "professional" ? (
          <Badge color="#87d068">
            {" "}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        ) : (
          <Badge color="#108ee9">
            {" "}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        )}
      </div>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>

      <p style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          onClick={handleEdit}
          style={{
            backgroundColor: "#74cf4e",
          }}
        >
          Edit
        </Button>
        <Button
          style={{
            backgroundColor: "red",
          }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </p>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
