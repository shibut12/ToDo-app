const items = [
    {
        id: 'item 1',
        description: 'Todo Item 1',
        isCompleted: false
    },
    {
        id: 'item 2',
        description: 'Todo Item 2',
        isCompleted: false
    },
    {
        id: 'item 3',
        description: 'Todo Item 3',
        isCompleted: false
    },
    {
        id: 'item 4',
        description: 'Todo Item 4',
        isCompleted: true
    }
];

const delay = 1000;

class todoApi{
    static getAllItems(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], items));
            }, delay);
        });
    }
}

export default todoApi;