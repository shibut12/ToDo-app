const items = [
    {
        id: 'item 1',
        description: " Todo Item 1"
    },
    {
        id: 'item 2',
        description: " Todo Item 2"
    },
    {
        id: 'item 3',
        description: " Todo Item 3"
    },
    {
        id: 'item 4',
        description: " Todo Item 4"
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