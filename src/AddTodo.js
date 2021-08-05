import { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state={
      todo: "",
      done: false
    };
  }
  handleChange = (e) => {
    this.setState(prevState => ({
      todo: e.target.value,
      done:false
    }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.todo) {
      alert("Todo cannot be blank!");
      return;
    }
    this.props.addTodo(this.state);
    this.setState({
      todo: "",
      done: false
    });
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} className="addTodo card card-body text-center m-1">
        <label htmlFor="todo" className="card card-header m-1 ">Todo:</label>
        <input id="todo" className="card card-text m-1" onChange={this.handleChange} value={this.state.todo} placeholder="Enter Text"></input>
        <button className="btn btn-info m-1">Submit</button>
      </form>
    );
  }
}

export default AddTodo;