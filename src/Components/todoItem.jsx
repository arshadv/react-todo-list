import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {  
        task : "do dishes",
        dueDate : "12-02-2020"
    }


    render() { 
        return ( 
            <div>
                <h4>
                    {this.props.task}
                </h4>
                <h3>
                    {this.props.dueDate}
                </h3>
                <button onClick = {() => this.props.delTask(this.props.id)}>
                    DELETE THIS TASK
                </button>
            </div>
         );
    }
}
 
export default ToDoItem;