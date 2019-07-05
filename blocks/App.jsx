import React, { Component } from 'react';

import FilterButton from './FilterButton';
import Todo from './Todo';

const filters = ['all', 'active', 'completed'];

class Block extends Component {
  state = {
    filter: 'all',
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

  handleChangeFilter = (filter) => {
    this.setState({
      filter,
    });
  }

  render() {
    const {
      state: {
        filter,
        list,
      },
    } = this;

    let listToShow = list;

    if (filter !== 'all') {
      let completed = true;

      if (filter === 'active') {
        completed = false;
      }

      listToShow = list.filter(({ done }) => done === completed);
    }

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
            {filters.map(value => (
              <FilterButton
                key={value}
                value={value}
                active={filter === value}
                onClick={this.handleChangeFilter}
              />
            ))}
          </div>
        </div>

        <ul className="row list-group">
          {listToShow.map(item => (
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
