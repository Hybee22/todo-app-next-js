import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <span>
              <i
                className={editItem ? "fas fa-book btn-warning" : "fas fa-book"}
              />
            </span>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Add todo item"
              value={item}
            />
          </div>
          <div>
            <button
              type="submit"
              className={editItem ? "btn btn-warning" : "btn btn-primary"}
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
