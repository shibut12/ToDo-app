import React, {PropTypes} from 'react'

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

export default TodoList;