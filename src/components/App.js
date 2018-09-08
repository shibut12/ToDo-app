import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import * as todoActions from '../actions/todoActions';

class App extends Component {
  render() {
      return (
        <div>
          <h1>Todo app</h1>
          <hr />
          <TodoList items={this.props.items}/>         
        </div>
      );
  }
}

function mapStateToProps(state, ownProps){
  return{
    items: state.items
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
