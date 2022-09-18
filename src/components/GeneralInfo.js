import React from "react";
import InputField from "./InputField";

class GeneralInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>General Information</h2>
        <InputField
          type="text"
          id="first_name"
          label="First Name"
          required="true"
        />
        <InputField
          type="text"
          id="last_name"
          label="Last Name"
          required="true"
        />
        <InputField type="email" id="email" label="Email" required="true" />
        <InputField type="tel" id="phone" label="Phone" required="true" />
        <button type="button">Edit</button>
      </section>
    );
  }
}

export default GeneralInfo;
