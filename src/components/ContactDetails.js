import React from "react";
import PropTypes from "prop-types";

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      name: "",
      phone: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleToggle() {
    if (!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleUpdate();
    }

    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleUpdate() {
    this.props.onUpdate(this.state.name, this.state.phone);
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleToggle();
    }
  }

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    const edit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );

    const view = this.state.isEdit ? edit : details;
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <p>
          <button onClick={this.handleToggle}>
            {this.state.isEdit ? "Edit" : "Update"}
          </button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  contact: PropTypes.object,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func
};

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: ""
  },
  onRemove: () => {
    console.error("onRemove not defined");
  },
  onUpdate: () => {
    console.error("onUpdate not defined");
  }
};
