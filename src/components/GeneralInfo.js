import React from "react";
import InputField from "./InputField";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>General Information</h2>
        <InputField
          type="text"
          id="first_name"
          label="First Name"
          required={true}
          submitted={this.props.submitted}
        />
        <InputField
          type="text"
          id="last_name"
          label="Last Name"
          required={true}
          submitted={this.props.submitted}
        />
        <InputField
          type="email"
          id="email"
          label="Email"
          required={true}
          submitted={this.props.submitted}
        />
        <InputField
          type="tel"
          id="phone"
          label="Phone"
          required={true}
          submitted={this.props.submitted}
        />
      </section>
    );
  }
}

export default GeneralInfo;
