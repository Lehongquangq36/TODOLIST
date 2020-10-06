import React , {Component} from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';
class TaskItem extends Component{

    constructor(props){
        super(props);
        this.state={

        }  
    }
    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEdit = () => {
    
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    render(){
        
        var {task} = this.props;
        var {index} = this.props;

        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{task.name}</td>
                
                <td className="text-center">{this.showLevel(task.level)}</td>
                <td className="text-center">
                {this.showStatus(task.status)}
                </td>
                
                <td className="text-center">
                    <button onClick={this.onDelete} type="button" className="btn btn-warning ">
                        <i className="fa fa-trash-alt text-white"></i>
                    </button>
                </td>
                <td>
                    <button onClick={this.onEdit}  type="button" className="btn btn-primary">
                    <i className="fa fa-pen text-white"></i>
                    </button>
                
                </td>
            </tr>
        );
    }
    showLevel(level) {
        let elemLevel = null;
        if(level === 0){
            elemLevel = <span className="label bg-success p-1 px-2">Small</span>;
        }else if(level === 1){
            elemLevel = <span className="label bg-warning p-1 px-1">Medium</span>;
        }else if(level === 2){
            elemLevel = <span className="label bg-danger p-1 px-3">High</span>;
        }
        return elemLevel;
    }
    showStatus(status) {
        let elemStatus = null;
        if(status === 0){
            elemStatus = <span className="label text-warning">Incomplete</span>;
        }else if(status === 1){
            elemStatus = <span className="label text-success">Completed</span>;
        }
        return elemStatus;
    }
}

const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch , props) =>{
    return {
        onDeleteTask : (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onEditTask : (task) =>{
            dispatch(actions.editTask(task));
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm());
          },
        onOpenForm : () =>{
            dispatch(actions.openForm());
        },
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(TaskItem);