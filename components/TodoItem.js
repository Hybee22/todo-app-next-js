import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <li className="item">
          <h6>{title}</h6>
          <div className="todo-icon" onClick={handleEdit}>
            <span className="primary">
              <i className="fas fa-pen" />
            </span>
            <span className="danger" onClick={handleDelete}>
              <i className="fas fa-trash" />
            </span>
          </div>
        </li>
      </div>
    );
  }
}
