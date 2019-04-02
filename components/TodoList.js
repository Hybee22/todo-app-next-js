import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="item-list" />
        <div>
          <button onClick={clearList} type="submit" className="btn btn-danger">
            Remove Items
          </button>
        </div>
        <h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
        </h3>
      </div>
    );
  }
}
