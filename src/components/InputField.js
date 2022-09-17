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
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={id} required={required} />
      </div>
    );
  }
}

InputField.defaultProps = {
  required: false,
};

export default InputField;
