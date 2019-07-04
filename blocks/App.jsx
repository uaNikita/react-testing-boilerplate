import React, { Component } from 'react';

import Todo from './Todo';

class Block extends Component {
  state = {
    list: [
      {
        id: 0,
        text: 'Some',
        done: false,
      },
      {
        id: 1,
        text: 'Some',
        done: false,
      },
      {
        id: 2,
        text: 'Some',
        done: true,
      },
      {
        id: 3,
        text: 'Some',
        done: false,
      },
      {
        id: 4,
        text: 'Some',
        done: false,
      },
    ],
  }

  handleDelete = (id) => {

  }

  handleUpdate = (id, data) => {
    const {
      state: {
        list,
      },
    } = this;

    const item = list.filter(i => i.id === id)[0];

    Object.assign(item, data);

    this.setState({
      list,
    });
  }

  render() {
    const {
      state: {
        list,
      },
    } = this;

    return (
      <div className="container">

        <div className="row mt-5">
          <input
            id="to-be-done"
            className="form-control"
            placeholder="What needs to be done?"
          />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="btn-group mt-5 mb-3">
            <button type="button" className="btn btn-secondary">All</button>
            <button type="button" className="btn btn-secondary">Active</button>
            <button type="button" className="btn btn-secondary">Completed</button>
          </div>
        </div>

        <ul className="row list-group">
          {list.map(item => (
            <Todo
              key={item.id}
              onEdit={this.handleDelete}
              onUpdate={this.handleUpdate}
              {...item}
            />
          ))}
        </ul>

      </div>
    );
  }
}

export default Block;
