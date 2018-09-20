import React from 'react';
import PropTypes from 'prop-types';
import {addItem} from '../actions/todoActions';
import {connect} from 'react-redux';

let ItemForm =({item, dispatch}) =>{
    let id, description, isCompleted
    
    function handleClick(e){
        console.log('test');
        const itm={
            id:id.value,
            description:description.value,
            isCompleted:isCompleted.value==='on'?true:false
        }
        console.log(itm);
    };

    return(
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                const itm={
                    id:id.value,
                    description:description.value,
                    isCompleted:isCompleted.value==='on'?true:false
                }
                dispatch(addItem(itm))
            }}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input 
                        name="id"
                        type="text"
                        ref={node=>{
                            id=node
                        }}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input 
                        name="description"
                        type="text"
                        ref={node=>{
                            description = node
                        }}/>
                </div>
                <div>
                    <label htmlFor="isCompleted">Is Completed?</label>
                    <input 
                        name="isCompleted"
                        type="checkbox"
                        ref={node=>{
                            isCompleted = node
                        }}/>
                </div>
                <input 
                    type="submit"
                    value="Save"/>
            </form>
            <button onClick={handleClick}>Test</button>
        </div>
    );
};

ItemForm.propTypes = {
    item: PropTypes.object
}

ItemForm = connect()(ItemForm)
export default ItemForm;