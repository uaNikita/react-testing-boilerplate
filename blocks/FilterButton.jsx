import React, { Component } from 'react';

class Block extends Component {
  handleClick = () => {
    const {
      props: {
        value,
        onClick,
      },
    } = this;

    onClick(value);
  }

  render() {
    const {
      props: {
        value,
        active,
      },
    } = this;

    let className = 'btn btn-primary';

    if (active) {
      className += ' active';
    }

    const valueFirstUppercase = value.charAt(0).toUpperCase() + value.slice(1);

    return (
      <button
        type="button"
        className={className}
        onClick={this.handleClick}
      >
        {valueFirstUppercase}
      </button>
    );
  }
}

export default Block;
