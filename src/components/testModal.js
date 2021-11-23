import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";



class ModelWrapper extends Component {
  state = {
    loginOpened: false,
    signupOpened: false
  };
  openModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: true,
        signupOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        loginOpened: false,
        signupOpened: true
      });
    }
  };
  closeModal = modalType => () => {
    if (modalType === "login") {
      this.setState({
        loginOpened: false
      });
    } else if (modalType === "signup") {
      this.setState({
        signupOpened: false
      });
    }
  };
  render() {
    const { loginOpened, signupOpened } = this.state;
    return (
      <>
        <Modal isOpen={loginOpened} onRequestClose={this.closeModal("login")}>
          <h1>Login</h1>
          <button onClick={this.openModal("signup")}>Open Signup</button>
          <button onClick={this.closeModal("login")}>Close this modal</button>
        </Modal>
        <Modal isOpen={signupOpened} onRequestClose={this.closeModal("signup")}>
          <h1>Sign Up</h1>
          <button onClick={this.openModal("login")}>Open Login</button>
          <button onClick={this.closeModal("signup")}>Close this modal</button>
        </Modal>
        <button onClick={this.openModal("login")}>Open Login</button>
        <button onClick={this.openModal("signup")}>Open Signup</button>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ModelWrapper />, rootElement);
