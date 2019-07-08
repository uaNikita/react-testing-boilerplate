import React, { Component } from 'react';

import TodoInput from './TodoInput';
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
    this.setState(({ list }) => ({
      list: list.filter(i => i.id !== id),
    }));
  }

  handleUpdate = (id, data) => {
    this.setState(({ list }) => {
      const item = list.filter(i => i.id === id)[0];

      Object.assign(item, data);

      return {
        list,
      };
    });
  }

  handleChangeFilter = (filter) => {
    this.setState({
      filter,
    });
  }

  handleAdd = (text) => {
    this.setState(({ list }) => {
      list.push({
        id: list[list.length - 1].id + 1,
        text,
        done: false,
      });

      return {
        list,
      };
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
          <TodoInput onAdd={this.handleAdd} />
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
              onUpdate={this.handleUpdate}
              onClose={this.handleDelete}
              {...item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Block;
