import React ,{Component} from 'react';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskControl extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
        
    }
    onToggleForm = () => {
      if(this.props.taskSelected && this.props.taskSelected.id != null){
        this.props.onOpenForm();
      }else{
        this.props.onToggleForm();
        
      }
      this.props.onClearForm({
        id : null,
        name : '',
        status : 0,
        level : 0,
       });
       
    }
     render(){
       
            
        var elemButton = <button onClick={this.onToggleForm} type="button" className="btn btn-success btn-block">Add to do list</button>;
        if(this.props.isShowForm === true){
            elemButton = <button onClick={this.onToggleForm} type="button" className="btn btn-danger btn-block">Close form</button>;
        }
         return (
            <div className="card-body pb-0">
                <div className="row">
                    <TaskSearch />
                    <TaskSort/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 my-2">
                        {elemButton}
                    </div>
                </div>
            </div>
         );
     }
}
const mapStateToProps = (state) =>{
    return {
      isShowForm : state.isShowForm,
      taskSelected : state.taskSelected,
      
    }
  }
  
  const mapDispatchToProps = (dispatch , props) =>{
    return {
      onToggleForm  : () => {
        dispatch(actions.toggleForm());
      },
      onClearForm   : (task) => {
        dispatch(actions.editTask(task));
      },
      onOpenForm    : () => {
        dispatch(actions.openForm());
      },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TaskControl);