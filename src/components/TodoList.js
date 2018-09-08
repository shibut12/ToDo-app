import React from 'react'
import PropTypes from 'prop-types';

const TodoList = ({items}) => {
    if(items.length > 0){
        return(
            <ul>
                {
                    items.map(item =>
                        <li key={item.id}>{item.id} {item.description} {item.isCompleted === true ? 'Completed' : 'Not completed'}</li>
                    )
                }
            </ul>
        );
    }
    else
    {
        return (
            <p>No tasks available, start adding new tasks</p>
        );
    }
    
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodoList;