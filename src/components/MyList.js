import React from 'react';
import PropTypes from 'prop-types';

function MyList({ header, items, onItemClick}) {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map(item => (
                    <li key={item.id} onClick={() => onItemClick(item.id)} style={{ textDecoration: item.clicked ? 'line-through' : ''}} >
                        {item.text}
                    </li>
                ))}
            </ol>
        </div>
    );
}

MyList.propTypes = {
    header: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default MyList;