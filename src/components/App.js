import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoList from './TodoList';
import ItemForm from './ItemForm';
import * as todoActions from '../actions/todoActions';

class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state={
      item: Object.assign({}, this.props.item)
    }

    this.saveItem = this.saveItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  saveItem(event){
    event.preventDefault();

    this.props.actions.addItem(this.state.item);
  }

  onChange(event){
    const fieldName = event.target.name;
    let item = this.state.item;
    item[fieldName] = event.target.value;
    return this.setState({item: item});
  }

  render() {
      return (
        <div>
          <h1>Todo app</h1>
          <ItemForm onSave={this.saveItem} onChange={this.onChange}/>
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
    items: state.items
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);