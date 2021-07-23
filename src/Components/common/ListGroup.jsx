import React from 'react';

function ListGroup (props) {
    
    // set active class by passing item and selected item
    const setActiveClass = (item, selectedItem) => {
          return (item[textProperty] === selectedItem[textProperty]?"list-group-item active":"list-group-item" )
     }
    const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;
    return ( 
        <ul className="list-group clickable d-inline-block">
            {items.map(item =>(<li onClick={() => onItemSelect(item)} key={item[valueProperty]}
            className={setActiveClass(item, selectedItem)}>
            {item[textProperty]}</li>)
            )}
        </ul>
        );
}

// set default for list group
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;