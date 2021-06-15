import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './Components/MyForm'
import MyForm from './Components/MyForm';
import PokeAPI from './Components/PokeAPI';
import ToDoItem from './Components/todoItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import shortid from 'shortid'

class App extends Component {
  state = {
    tasks : 
    [ {id: 0, task : "hello", dueDate: "12/24/2020"}],
    formtask : "",
    formdate: "",
    maxid : 0
  }

  delTask = (id) => {
    console.log(id)
    const newtasks = this.state.tasks.filter(t => t.id != id)
    this.setState({tasks : newtasks })
    this.setState({ maxid : this.state.maxid -1 })
  }
  
  handleChange = (event) => {
    
    this.setState({formtask : event.target.value})
    
  }

  handleChangeDate = (event) => {
    this.setState({formdate : event.target.value})
  }

  submitTask = (event) => {
    event.preventDefault()
    const newTask = { id: shortid.generate(), task: this.state.formtask, dueDate: this.state.formdate}
    this.setState( { maxid : this.state.maxid + 1})
    this.setState( { tasks: [...this.state.tasks, newTask] })
    this.setState( {formtask: ""})
    this.setState( {formdate: ""})
    console.log("here")
  }
  
  render(){
    return (
      <div>
        <form>
          <input value = {this.state.formtask} onChange={this.handleChange}>
          </input>
          <input value = {this.state.formdate} onChange={this.handleChangeDate}>
          </input>
          <button onClick ={ this.submitTask } >
            SUBMIT TASK
          </button>
        </form>
        {this.state.tasks.map(item => 
          <ToDoItem key = {item.id} id = {item.id} task = {item.task} dueDate = {item.dueDate} delTask = {this.delTask} />)}
      </div>
    );
  }
}

export default App;
