import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      password: "",
      email: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Sign Up</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}> Sign Up </ModalHeader>
          <ModalBody>
            <form className="bg-white d-flex flex-column">
              <input
                className="my-3"
                placeholder="Name"
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
              />
              <input
                className="my-3"
                placeholder="password"
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
              <input
                className="my-3"
                placeholder="email"
                onChange={event => {
                  this.setState({ image: event.target.value });
                }}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bouton"
              onClick={() => {
                const newContact = {
                  name: this.state.name,
                  password: this.state.password,
                  email: this.state.email
                };
                this.toggle();
                // return this.props.sendmovie(newmovie);
              }}
            >
              Sign Up
            </Button>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
