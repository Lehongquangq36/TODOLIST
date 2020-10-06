import React ,{Component} from 'react';
import {connect} from  'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id          : '',
            name        : '',
            status      : 0,
            level       : 0,
        }     
    }
    componentWillMount(){
        if( this.props.taskSelected &&  this.props.taskSelected.id !== ''){
            this.setState({
                id          :  this.props.taskSelected.id,
                name        :  this.props.taskSelected.name,
                level       : + this.props.taskSelected.level,
                status      : + this.props.taskSelected.status,
                
            });
        }else{
            this.onClear();
        } 
    }

    componentWillReceiveProps(nextProp){
        if( nextProp.taskSelected && nextProp.taskSelected.id !== ''){
            this.setState({
                id          : nextProp.taskSelected.id,
                name        : nextProp.taskSelected.name,
                level       : +nextProp.taskSelected.level,
                status      : +nextProp.taskSelected.status,
                
            });
        }else{
            this.onClear();
        }
    }
    
    onCancel = () => {
        this.props.onCloseForm();    
    }

    onChange = (event) => {
        
        var target = event.target;
        var value = target.value;
        var name = target.name;
        if(name === 'status'){
            value = +target.value;
        }
        if(name === 'level'){
            value = +target.value;
        }
        this.setState({
            [name]:value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.onCancel();
    }

    onClear = () =>{
        this.setState({
            name        : '',
            status      : 0,
            level       : 0,
        })
    }

    render(){
        if(!this.props.isShowForm) return null;
        return (
            <div className="card-body py-0">
                <div className="row ">
                    <div className="offset-md-6 offset-lg-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group mx-1">
                                <label htmlFor="name" >Task Name</label>
                                <input 
                                    type="text" 
                                    value={this.state.name} 
                                    onChange={this.onChange} 
                                    id="name" 
                                    name="name" 
                                    className="form-control" 
                                    placeholder="Task name "
                                    
                                    />
                            </div>
                            <div className="form-group mx-1">
                                <label htmlFor="status" >Status</label>
                                <select 
                                
                                className="form-control" 
                                name="status" 
                                id="status"  
                                value={this.state.status}
                                onChange={this.onChange}
                                required>
                                    <option value={0}>Incomplete</option>
                                    <option value={1}>Completed</option>
                                </select>
                            </div>
                            <div className="form-group mx-1">
                                <label htmlFor="level" >Level</label>
                                <select 
                                
                                className="form-control" 
                                name="level" 
                                id="level"
                                value={this.state.level}
                                onChange={this.onChange}  
                                required>
                                    <option value={0}>Small</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>High</option>
                                </select>
                            </div>         
                            <div className="form-group mx-1">
                                <button  type="submit" className="btn btn-primary mx-2">Submit</button>
                                <button onClick={this.onCancel} type="submit" className="btn btn-warning mx-2">Cancel</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isShowForm : state.isShowForm,
        taskSelected : state.taskSelected
    }
}
const mapDispatchToProps = (dispatch , props) =>{
    return {
        onSaveTask : (task) =>{
            dispatch(actions.saveTask(task));
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm());
          },
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps )(TaskForm);