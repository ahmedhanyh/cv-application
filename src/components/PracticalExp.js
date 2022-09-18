import React from "react";
import InputField from "./InputField";

class PracticalExp extends React.Component {
  render() {
    return (
      <section>
        <h2>Practical Experience</h2>
        <InputField type="text" id="company_name" label="Company Name" />
        <InputField type="text" id="position" label="Position Title" />
        <InputField type="date" id="start_date" label="Start date" />
        <InputField type="date" id="end_date" label="End date" />
        <button type="button">Edit</button>
      </section>
    );
  }
}

export default PracticalExp;
