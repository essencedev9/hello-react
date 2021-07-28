import React from "react";
import ContactInfo from "./ContactInfo";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: "Abet", phone: "010-0000-0001" },
        { name: "Betty", phone: "010-0000-0002" },
        { name: "Chalie", phone: "010-0000-0003" },
        { name: "David", phone: "010-0000-0004" }
      ]
    };
  }

  render() {
    const mapToComponent = data => {
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input name="keyword" placeholder="Search" />
        <div>{mapToComponent(this.state.contactData)}</div>
      </div>
    );
  }
}
