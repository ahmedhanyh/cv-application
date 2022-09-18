import React from "react";
import InputField from "./InputField";

class PracticalExp extends React.Component {
  render() {
    return (
      <section>
        <h2>Practical Experience</h2>
        <InputField
          type="text"
          id="company_name"
          label="Company Name"
          submitted={this.props.submitted}
        />
        <InputField
          type="text"
          id="position"
          label="Position Title"
          submitted={this.props.submitted}
        />
        <InputField
          type="date"
          id="start_date"
          label="Start date"
          submitted={this.props.submitted}
        />
        <InputField
          type="date"
          id="end_date"
          label="End date"
          submitted={this.props.submitted}
        />
      </section>
    );
  }
}

export default PracticalExp;
