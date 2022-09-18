import React from "react";
import "../styles/App.css";
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  handleEdit = (event) => {
    this.setState({ submitted: false });
  };

  render() {
    return (
      <div className="cv-form">
        <h1>CV Submission Form</h1>
        <p>
          Fields marked with <span style={{ color: "red" }}>*</span> are
          required.
        </p>
        <form action="#" method="get" onSubmit={this.handleSubmit}>
          <GeneralInfo submitted={this.state.submitted} />
          <EducationalExp submitted={this.state.submitted} />
          <PracticalExp submitted={this.state.submitted} />
          <button type="button" onClick={this.handleEdit}>
            Edit
          </button>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
