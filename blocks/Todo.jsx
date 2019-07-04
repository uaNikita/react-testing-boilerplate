import React, { Component } from 'react';


class Block extends Component {
  handleChangeStatus = () => {
    const {
      props: {
        id,
        done,
        onUpdate,
      },
    } = this;

    onUpdate(id, {
      done: !done,
    });
  }

  render() {
    const {
      props: {
        text,
        done,
      },
    } = this;

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{text}</span>
        <button
          type="button"
          className="btn btn-light"
          onClick={this.handleChangeStatus}
        >
          {done ? '👍' : '📌'}
        </button>
      </li>
    );
  }
}

export default Block;
