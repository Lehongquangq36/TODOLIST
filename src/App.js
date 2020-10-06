import React, { Component } from 'react';
import Title from './component/Title';
import TaskControl from './component/TaskControl';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
 
    }; 
  }

  render(){

    return (
        <div className="row">
            <div className="card" style={{width: '100%'}}>
                <Title/>
                <TaskControl/>
                <TaskForm /> 
                <TaskList /> 
          </div>
      </div>
    );
  }
}

export default App;
