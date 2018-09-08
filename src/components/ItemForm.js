import React from 'react';
import PropTypes from 'prop-types';

const ItemForm =({onSave, onChange, item}) =>{
    return(
        <form>
            <div>
                <label htmlFor="id">Id</label>
                <input 
                    name="id"
                    type="text"
                    onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input 
                    name="description"
                    type="text"
                    onChange={onChange}/>
            </div>
            <input 
                type="submit"
                value="Save"
                onClick={onSave}/>
        </form>
    );
}

ItemForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    item: PropTypes.object
}

export default ItemForm;