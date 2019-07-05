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

  handleClose = () => {
    const {
      props: {
        id,
        onClose,
      },
    } = this;

    onClose(id);
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

        <div className="buttons">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleChangeStatus}
          >
            {done ? '👍' : '📌'}
          </button>

          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleClose}
          >
            {'❌'}
          </button>
        </div>
      </li>
    );
  }
}

export default Block;
