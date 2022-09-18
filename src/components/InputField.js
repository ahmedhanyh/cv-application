import React from "react";
import "../styles/InputField.css";

class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, id, label, required } = this.props;

    return (
      <div className="input-wrapper">
        <label htmlFor={id}>
          {label}
          {required ? <span style={{ color: "red" }}>*</span> : ""}
        </label>
        <input
          type={type}
          id={id}
          name={id}
          placeholder=" "
          required={required}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  required: false,
};

export default InputField;
