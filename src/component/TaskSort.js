import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskSort extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        
    }

    onSort(sortBy , sortDir){
        this.props.onSortTask({
            sortBy : sortBy,
            sortDir : sortDir
        });
    }    
    render(){
        console.log(this.props.sort);
        return(
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-2 my-2">
                <div className="btn-group btn-block">
                    <button type="button" className="btn btn-block btn-warning text-white dropdown-toggle" data-toggle="dropdown">
                        Sort
                    </button>
                    <ul className="dropdown-menu">
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('','')}>None sort</a></li>
                        <li className="dropdown-divider"></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('name','asc')}>Name ASC</a></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('name','desc')}>Name DESC</a></li>
                        <li className="dropdown-divider"></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('level','asc')}>Level ASC</a></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('level','desc')}>Level DESC</a></li>
                        <li className="dropdown-divider"></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('status','asc')}>Status ASC</a></li>
                        <li style={{lineHeight:1}}><a className="dropdown-item" href="/#" role="button" onClick={() => this.onSort('status','desc')}>Status DESC</a></li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
      sort : state.sort
      }
    }
  
const mapDispatchToProps = (dispatch , props) =>{
    return {
      
      onSortTask  : (sort) =>{
        dispatch(actions.sortTask(sort))
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);