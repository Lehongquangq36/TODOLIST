import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class TaskSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            strSearch: '',
        }
        
    }
    onSearch = () => {
        
       this.props.onSearch(this.state.strSearch);
    }
    onClear = () => {
        this.setState({
            strSearch :  '',
         })
         this.props.onSearch('');
    }
    onChange = (event) => {
        this.setState({
           strSearch :  event.target.value
        })
    }
    render(){
        
        return(
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-2">
                <div className="input-group">
                    <input value={this.state.strSearch} onChange={this.onChange} className="form-control" type="text" name="search" placeholder="Search for..."  />
                    <div className="input-group-prepend">
                        <button onClick={this.onClear} type="reset" className="btn btn-primary"><i className="fa fa-close"></i></button>
                        <button onClick={this.onSearch} type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

  const mapDispatchToProps = (dispatch , props) =>{
    return {
      
      onSearch      : (strSearch) =>{
        dispatch(actions.searchTask(strSearch))
      }
    }
  }
  export default connect(null, mapDispatchToProps)(TaskSearch);
