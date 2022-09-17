import React from "react";
import InputField from "./InputField";

class GeneralInfo extends React.Component {
  render() {
    return (
      <section>
        <h2>General Information</h2>
        <InputField type="text" id="firstname" label="First Name" />
        <InputField type="text" id="lastname" label="Last Name" />
        <InputField type="email" id="email" label="Email" />
        <InputField type="tel" id="phone" label="Phone" />
      </section>
    );
  }
}

export default GeneralInfo;
