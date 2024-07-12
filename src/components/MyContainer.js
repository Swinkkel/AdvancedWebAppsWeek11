import React, { useState } from 'react';
import MyList from './MyList'

function MyContainer() {
    const [items, setItems] = useState([
        {id: "1", text: "item 1", clicked: false},
        {id: "2", text: "item 2", clicked: false}
    ])

    const [newItemText, setNewItemText] = useState('');

    const addItem = () => {
        const newItem = {
            id: (items.length + 1).toString(),
            text: newItemText,
            clicked: false
        };
        setItems([...items, newItem]);
        setNewItemText('');
    }

    const updateItem = (id) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, clicked: !item.clicked } : item
        ));
    }

    return (
        <div>
            <h1>My Container</h1>
            <textarea value = {newItemText} onChange={(e) => setNewItemText(e.target.value)} placeholder='Enter new item text ' />
            <button onClick={addItem}>Add Item</button>
            <MyList header = "My List" items={items} onItemClick={updateItem} />
        </div>
    );
}

export default MyContainer;