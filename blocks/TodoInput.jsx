import React, { Component } from 'react';


class Block extends Component {
  state = {
    value: '',
  }

  handleKeyUp = ({ key }) => {
    const {
      props: {
        onAdd,
      },
      state: {
        value,
      },
    } = this;

    if (key === 'Enter') {
      onAdd(value);

      this.setState({
        value: '',
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  }

  render() {
    const {
      state: {
        value,
      },
    } = this;

    return (
      <input
        value={value}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
        id="to-be-done"
        className="form-control"
        placeholder="What needs to be done?"
      />
    );
  }
}

export default Block;
