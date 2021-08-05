import { Component } from "react";
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 0,
          todo: "Buy some milk",
          done: false
        },
        {
          id: 1,
          todo: "Mow the lawn",
          done: false
        },
        {
          id: 2,
          todo: "Air out the matress",
          done: false
        }
      ],
      count: 3
    };
  }
  addTodo = (todo) => {
    this.setState(({todos, count}) => {
      const entry = {id: count, ...todo};
      return ({
        todos: [...todos, entry],
        count: count + 1
      });
    });
  };
  markDone = (idx) => {
    this.setState(
      ({todos,count}) => ({
        todos: todos.map( todo => 
          todo.id === idx ? 
          {id: todo.id, todo: todo.todo, done: true} 
          :todo),
        count: count
      })
    );
  };
  deleteTodo = (idx) => {
    this.setState(
      ({todos, count}) => ({
        todos: todos.filter( ({id}) => id !== idx),
        count: count
      })
    )
  };
  clearAll = () => {
    this.setState({
      todos: [],
      count: 0
    })
  }
  render() {
    return (
      <div className="App card">
        <AddTodo addTodo={this.addTodo}/>
        <br/>
        <button className="btn btn-danger m-2" onClick={this.clearAll}>Clear</button>
        <TodoList list={this.state.todos} markDone={this.markDone} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
