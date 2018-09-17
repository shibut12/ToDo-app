import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import ItemForm from './ItemForm';
import * as todoActions from '../actions/todoActions';

class App extends Component {

  render() {
      return (
        <div>
          <h1>Todo app</h1>
          <h2>{this.props.toggle}</h2>
          <ItemForm />
          <hr />
          <TodoList items={this.props.items}/>         
        </div>
      );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return{
    items: state.items,
    toggle: state.toggle
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);