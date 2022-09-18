import React from "react";
import InputField from "./InputField";

class EducationalExp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Education Experience</h2>
        <InputField
          type="text"
          id="school"
          label="School Name"
          required={true}
          submitted={this.props.submitted}
        />
        <InputField
          type="text"
          id="study"
          label="Field of Study"
          required={true}
          submitted={this.props.submitted}
        />
        <InputField
          type="date"
          id="date"
          label="Date of Study"
          required={true}
          submitted={this.props.submitted}
        />
      </section>
    );
  }
}

export default EducationalExp;
