import React, { Component } from "react";
import Authentication from "../../components/authentication/";
import Formlayout from "../../components/FormLayout";
class App extends Component {
  render() {
    return (
      <Formlayout>
        <Authentication {...this.props} />
      </Formlayout>
    );
  }
}

export default App;
