import React, { useContext } from 'react'

import { useDrop } from 'react-dnd'
import { ItemTypes, categories } from "./dnd";


const DropWrapper = ({ onDrop, children, category, icon, color, SelectionContext, markAsSelected }) => {

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PLAYER,
        canDrop: (item, monitor) => {
            const itemIndex = categories.findIndex(si => si.categories === item.categories);
            const categoriesIndex = categories.findIndex(si => si.categories === categories);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(categoriesIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, category);
            markAsSelected(item._id, category, icon, color)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    });


    return (
        <div ref={drop} className="drop-wrapper">

            {React.cloneElement(children, { isOver })}
        </div>
    )
}

export default DropWrapper








