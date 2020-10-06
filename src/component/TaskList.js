import React , {Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import _ from 'lodash';
class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {
           
        }
        
    }
     
    render(){
        var {tasks , strSearch,sort} = this.props;
        var tasksOrigin = [...tasks];
        if(strSearch){
        tasks = _.filter(tasksOrigin,(task)=>{
            return _.includes(task.name.toLowerCase(), strSearch.toLowerCase());
        });
        }

        tasks = _.orderBy(tasks,[sort.sortBy],[sort.sortDir]);

        var elemTask = tasks.map((task , index)=>{
            return (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    index={index}
                />  
            );
        });
         
        return(
            <div className="card-body">
            <h2 className="text-center">List Task</h2>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr className="text-center title-column">
                            <th style={{verticalAlign: 'middle', fontWeight: 400}}>#</th>
                            <th style={{verticalAlign: 'middle',fontWeight: 400}}>Name task</th>          
                            <th style={{verticalAlign: 'middle',fontWeight: 400}}>Level</th>
                            <th style={{verticalAlign: 'middle',fontWeight: 400}}>Status</th>
                            <th colSpan={2} className="text-default" style={{verticalAlign: 'middle'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elemTask}
                    </tbody>
                </table>
        </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks,
        strSearch : state.strSearch,
        sort : state.sort
    }
}

export default connect(mapStateToProps , null)(TaskList);