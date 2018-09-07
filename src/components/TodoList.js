import React from 'react'
import PropTypes from 'prop-types';

const TodoList = ({items}) => {
    return(
        <ul>
            {
                items.map(item =>
                    <li key={item.id}>{item.description}</li>
                )
            }
        </ul>
    );
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired
}

export default TodoList;