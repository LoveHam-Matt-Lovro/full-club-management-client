import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";


export default function Container({ id, items, title }) {
    const { setNodeRef } = useDroppable({ id });
    const color = items.length > 0 ? "#f5fff5" : "#fff5f5";
    return (
        <div id={id} className='p-3' style={{ "width": "100%", "backgroundColor": color, "minHeight": "80vh" }} align="center">
            <h2>{title}</h2>
            <SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
                <div ref={setNodeRef}>
                    {items.map((id) => (
                        <SortableItem id={id} />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
}
