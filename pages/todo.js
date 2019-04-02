import Layout from "../components/Layout";
import "../scss/style.scss";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import uuid from "uuid";

class Todo extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      id: uuid(),
      item: "",
      editItem: false
    });
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const sortedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: sortedItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <Layout>
        <div className="bg-white">
          <h3>Todo App</h3>
          <div className="todo text-left">
            <div className="input">
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
            </div>

            <div className="list">
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Todo;
