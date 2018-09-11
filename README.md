# TODO App

A simple todo app created using _React & Redux_.

```shell
git clone https://github.com/shibut12/ToDo-app.git
cd ToDo-app
npm stall
npm start
# open http://localhost:3000 in a browser
```

## Changes for adding todo item

1. Defined _ADD_TODO_ in actionTypes.js
2. Defined action 'addItem' in todoActions.js
3. Updated _todoReducer.js_ with case for `types.ADD_TODO`
    1. Used `Object.assign` to add _item_ into store
5. Created a state for `item` in App.js
6. Create _onChange()_ function in App.js to update local state when input form changes.
7. Created _container_ __ItemForm.js__ with input fields and submit button. Form uses methods passed in props to act on data.
8. Created _saveItem()_ function to submit form with data in _state: item_
 
 
