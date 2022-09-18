import React from "react";
import InputField from "./InputField";

class EducationalExp extends React.Component {
  render() {
    return (
      <section>
        <h2>Education Experience</h2>
        <InputField
          type="text"
          id="school"
          label="School Name"
          required="true"
        />
        <InputField
          type="text"
          id="study"
          label="Field of Study"
          required="true"
        />
        <InputField
          type="date"
          id="date"
          label="Date of Study"
          required="true"
        />
        <button type="button">Edit</button>
      </section>
    );
  }
}

export default EducationalExp;
